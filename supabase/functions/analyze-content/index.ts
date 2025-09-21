import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalysisResult {
  score: number;
  status: 'verified' | 'suspicious' | 'false';
  summary: string;
  sources: Array<{
    name: string;
    type: string;
    credibility: string;
    verified: boolean;
  }>;
  scamSimilarity: number;
  languagePatterns: number;
  factConsistency: number;
  eli12Explanation: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { content } = await req.json();
    
    if (!content || typeof content !== 'string') {
      throw new Error('Content is required and must be a string');
    }

    console.log('Analyzing content:', content.substring(0, 100) + '...');

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Create a detailed prompt for fact-checking analysis
    const prompt = `You are an expert fact-checker and content analyst. Analyze the following content for truthfulness, credibility, and potential misinformation. Provide a comprehensive analysis.

Content to analyze:
"${content}"

Please provide your analysis in the following JSON format:
{
  "score": <number between 0-100 indicating credibility>,
  "status": "<verified|suspicious|false>",
  "summary": "<brief summary of your findings>",
  "sources": [
    {
      "name": "<source name>",
      "type": "<primary|secondary|tertiary>",
      "credibility": "<high|medium|low>",
      "verified": <true|false>
    }
  ],
  "scamSimilarity": <number between 0-100 indicating similarity to known scam patterns>,
  "languagePatterns": <number between 0-100 indicating trustworthy language patterns>,
  "factConsistency": <number between 0-100 indicating internal consistency>,
  "eli12Explanation": "<explanation suitable for a 12-year-old about why this content is or isn't trustworthy>"
}

Consider these factors:
1. Source credibility and verification
2. Consistency with known facts
3. Language patterns (sensational vs. objective)
4. Presence of verifiable claims
5. Similarity to known misinformation patterns
6. Overall plausibility and logic

Provide only the JSON response, no additional text.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a professional fact-checker. Always respond with valid JSON only.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received');

    let analysisResult: AnalysisResult;
    
    try {
      // Parse the JSON response from OpenAI
      const content = data.choices[0].message.content.trim();
      console.log('Raw OpenAI content:', content);
      
      // Remove any markdown code blocks if present
      const jsonMatch = content.match(/```(?:json)?\s*(\{[\s\S]*\})\s*```/) || content.match(/(\{[\s\S]*\})/);
      const jsonString = jsonMatch ? jsonMatch[1] : content;
      
      analysisResult = JSON.parse(jsonString);
      console.log('Parsed analysis result:', analysisResult);
      
      // Validate the result structure
      if (typeof analysisResult.score !== 'number' || 
          !['verified', 'suspicious', 'false'].includes(analysisResult.status)) {
        throw new Error('Invalid analysis result structure');
      }
      
    } catch (parseError) {
      console.error('Error parsing OpenAI response:', parseError);
      console.error('Raw content:', data.choices[0].message.content);
      
      // Fallback analysis if parsing fails
      analysisResult = {
        score: 50,
        status: 'suspicious',
        summary: 'Analysis completed but with limited confidence due to parsing issues.',
        sources: [
          {
            name: 'Analysis Engine',
            type: 'automated',
            credibility: 'medium',
            verified: false
          }
        ],
        scamSimilarity: 30,
        languagePatterns: 60,
        factConsistency: 50,
        eli12Explanation: 'We tried to check this content but had some technical difficulties. It might be worth double-checking this information from other sources.'
      };
    }

    console.log('Returning analysis result:', analysisResult);

    return new Response(JSON.stringify(analysisResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in analyze-content function:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message,
      score: 0,
      status: 'false',
      summary: 'Analysis failed due to technical error.'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
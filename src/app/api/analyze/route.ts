import { NextRequest, NextResponse } from 'next/server'
import { geminiModel, TERMS_PROMPT, PRIVACY_PROMPT } from '@/lib/gemini'

export async function POST(request: NextRequest) {
  try {
    const { document, documentType } = await request.json()

    if (!document || typeof document !== 'string') {
      return NextResponse.json(
        { error: 'Document content is required' },
        { status: 400 }
      )
    }

    if (!documentType || (documentType !== 'terms' && documentType !== 'privacy')) {
      return NextResponse.json(
        { error: 'Document type must be either "terms" or "privacy"' },
        { status: 400 }
      )
    }

    // Select the appropriate prompt based on document type
    const prompt = documentType === 'terms' 
      ? TERMS_PROMPT.replace('{DOCUMENT_TEXT}', document)
      : PRIVACY_PROMPT.replace('{DOCUMENT_TEXT}', document)

    // Generate response from Gemini
    const result = await geminiModel.generateContent(prompt)
    const response = await result.response
    const text = response.text()    // Parse the JSON response
    let analysisResult
    try {
      // Clean the response text to ensure it's valid JSON
      let cleanedText = text.trim()
      
      // Remove markdown code blocks if present
      if (cleanedText.startsWith('```json')) {
        cleanedText = cleanedText.replace(/^```json\s*/, '').replace(/\s*```$/, '')
      } else if (cleanedText.startsWith('```')) {
        cleanedText = cleanedText.replace(/^```\s*/, '').replace(/\s*```$/, '')
      }
      
      // Final trim
      cleanedText = cleanedText.trim()
      
      analysisResult = JSON.parse(cleanedText)
    } catch (parseError) {
      console.error('Failed to parse Gemini response:', text)
      return NextResponse.json(
        { error: 'Invalid response from AI service' },
        { status: 500 }
      )
    }

    return NextResponse.json(analysisResult)
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze document' },
      { status: 500 }
    )
  }
}

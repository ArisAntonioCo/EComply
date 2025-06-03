import { GoogleGenerativeAI } from '@google/generative-ai'

const apiKey = process.env.GEMINI_API_KEY!
const genAI = new GoogleGenerativeAI(apiKey)

export const geminiModel = genAI.getGenerativeModel({ 
  model: 'gemini-1.5-flash'
})

export const TERMS_PROMPT = `You are a legal compliance assistant specializing in RA No. 11967 (E-Commerce Law of the Philippines). Analyze the provided Terms of Service document for compliance.

**Instructions:**
1. Score overall compliance of this Terms of Service document (0–100)
2. Score required Terms of Service sections individually
3. Identify any missing or vague sections
4. Provide clear and actionable recommendations per section

**Document Type:**
Terms of Service

**Document Content:**
{DOCUMENT_TEXT}

**Required JSON Response Format:**
{
  "document_type": "Terms of Service",
  "overall_compliance_score": <number 0-100>,
  "section_scores": {
    "Service Description": <score 0-100>,
    "User Responsibilities": <score 0-100>,
    "Liability Limitations": <score 0-100>,
    "Returns and Refunds": <score 0-100>,
    "Dispute Resolution": <score 0-100>
  },
  "missing_sections": ["<section_name>", ...],
  "recommendations": {
    "<section_name>": "<summary of compliance issues and suggestions>"
  }
}

**Scoring Criteria:**
- Overall score: Completeness and clarity across the entire Terms of Service
- Section scores: Whether each required section is present and compliant
- Recommendations: Practical, non-legal-advice suggestions for improving compliance

**Important:**
- Only return valid JSON (no markdown code blocks, no backticks)
- Do not add any extra explanation outside the JSON
- Return the JSON directly without any wrapping or formatting
- Be concise but specific`

export const PRIVACY_PROMPT = `You are a legal compliance assistant specializing in RA No. 11967 (E-Commerce Law of the Philippines). Analyze the provided Privacy Policy document for compliance.

**Instructions:**
1. Score overall compliance of this Privacy Policy document (0–100)
2. Score required Privacy Policy sections individually
3. Identify any missing or vague sections
4. Provide clear and actionable recommendations per section

**Document Type:**
Privacy Policy

**Document Content:**
{DOCUMENT_TEXT}

**Required JSON Response Format:**
{
  "document_type": "Privacy Policy",
  "overall_compliance_score": <number 0-100>,
  "section_scores": {
    "Data Collection": <score 0-100>,
    "Data Use": <score 0-100>,
    "Data Retention": <score 0-100>,
    "User Rights": <score 0-100>,
    "Third-Party Sharing": <score 0-100>
  },
  "missing_sections": ["<section_name>", ...],
  "recommendations": {
    "<section_name>": "<summary of compliance issues and suggestions>"
  }
}

**Scoring Criteria:**
- Overall score: Completeness and clarity across the entire Privacy Policy
- Section scores: Whether each required section is present and compliant
- Recommendations: Practical, non-legal-advice suggestions for improving compliance

**Important:**
- Only return valid JSON (no markdown code blocks, no backticks)
- Do not add any extra explanation outside the JSON
- Return the JSON directly without any wrapping or formatting
- Be concise but specific`

// Legacy prompt kept for backward compatibility if needed
export const COMPLIANCE_PROMPT = TERMS_PROMPT

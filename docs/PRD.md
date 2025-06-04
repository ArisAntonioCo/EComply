# Ecomply – Product Requirements Document (PRD)
**Subtitle:** E-Commerce Law Compliance Document Reviewer

---

## Goal
Help Filipino e-commerce businesses validate if their customer-facing documents (Terms of Service, Privacy Policy, etc.) comply with RA No. 11967 by:
- Automatically identifying compliance gaps
- Providing section-wise ratings
- Offering visual feedback and concise, actionable advice

## Target Users
- Local e-commerce website operators
- Online sellers using marketplaces or their own platforms
- Small to medium business owners seeking compliance assistance

## Core Features
- **Authentication**: Email/password login (via Supabase)
- **Step-by-Step Document Analysis Process**:
   - **Step 1**: Paste Terms of Service text for analysis
   - **Step 2**: View Terms of Service compliance results
   - **Step 3**: Paste Privacy Policy text for analysis
   - **Step 4**: View Privacy Policy compliance results
   - **Step 5**: Access combined compliance report
- **AI Compliance Analysis**:
   - Checks for presence of required legal clauses
   - Rates document's coverage (overall + per section)
   - Flags missing or vague requirements
- **Visual Feedback**:
   - Step-by-step roadmap/progress indicator
   - Score indicators (✅ / ⚠️ / ❌)
   - Section-level compliance cards
   - Suggestions for improvement
- **Landing Page**:
   - Overview of RA No. 11967
   - Compliance benefits
   - CTA to get started

## AI Responsibilities
Gemini analyzes pasted document content per document type and returns structured JSON:

### Terms of Service Analysis
```json
{
  "document_type": "Terms of Service",
  "overall_compliance_score": 72,
  "section_scores": {
    "Service Description": 90,
    "User Responsibilities": 65,
    "Liability Limitations": 80,
    "Returns and Refunds": 40,
    "Dispute Resolution": 85
  },
  "missing_sections": ["Returns and Refunds"],
  "recommendations": {
    "Service Description": "Good coverage of service terms.",
    "User Responsibilities": "Needs clarity on prohibited activities.",
    "Liability Limitations": "Well-defined limitations.",
    "Returns and Refunds": "Missing or vague terms for return eligibility.",
    "Dispute Resolution": "Good coverage of resolution mechanisms."
  }
}
```

### Privacy Policy Analysis
```json
{
  "document_type": "Privacy Policy",
  "overall_compliance_score": 78,
  "section_scores": {
    "Data Collection": 85,
    "Data Use": 70,
    "Data Retention": 60,
    "User Rights": 90,
    "Third-Party Sharing": 85
  },
  "missing_sections": [],
  "recommendations": {
    "Data Collection": "Good coverage of data collection methods.",
    "Data Use": "Needs more details on specific uses of data.",
    "Data Retention": "Add specific timeframes for data retention.",
    "User Rights": "Excellent coverage of user rights under Philippine law.",
    "Third-Party Sharing": "Good disclosure of third-party relationships."
  }
}
```

## UI Requirements
### 1. Landing Page
- Hero section with compelling headline and subtext about RA No. 11967
- Clean flat design with modern typography (Inter font)
- Feature showcase with icon-supported value propositions
- Social proof and credibility indicators
- Engaging CTAs with clear user journey guidance
- Professional layout with business-focused messaging
- Responsive design that looks exceptional on all devices

### 2. Dashboard (Post Login)
- Step-by-step progress indicator (roadmap style)
- Tabs or steps clearly labeled for each document type
- Text area to paste documents (one document type at a time)
- "Continue to Next Step" button
- Loading spinner
- Clean card-based layout with subtle shadows
- Responsive grid system for optimal spacing

### 2.5. Authentication Pages
- **Modern Split-Screen Layout**: Left side with compelling visuals, right side with form
- **Brand Consistency**: Cohesive design language with landing page
- **Enhanced Form Design**: 
  - Clean, spacious input fields with floating labels
  - Real-time validation feedback with clear error messages
  - Password strength indicator for signup process
  - Smooth transitions between login and signup modes
- **Trust & Security Elements**:
  - Security badges and compliance indicators
  - Clear privacy policy and terms links
  - Social proof elements (user testimonials or metrics)
- **Loading & Success States**:
  - Skeleton loading for better perceived performance
  - Success animations and clear feedback messages
  - Redirect handling with loading indicators
- **Mobile Optimization**: 
  - Touch-friendly design with proper spacing
  - Simplified layout for smaller screens
  - Progressive enhancement for better UX

### 3. Analysis Pages
- **Terms of Service Analysis Page**:
  - Overall Terms of Service Compliance Score with circular progress
  - Section-level Compliance Cards specific to Terms of Service
  - Missing Sections warning
  - Expandable AI recommendations
  - "Continue to Privacy Policy" button

- **Privacy Policy Analysis Page**:
  - Overall Privacy Policy Compliance Score with circular progress
  - Section-level Compliance Cards specific to Privacy Policy
  - Missing Sections warning
  - Expandable AI recommendations
  - "Continue to Final Report" button

### 4. Final Report Page
- Combined compliance status for both documents
- Side-by-side comparison of document scores
- Consolidated recommendations
- Interactive elements with hover states
- Option to download full compliance report

## Tech Stack
- **Frontend**: Next.js (with TypeScript), TailwindCSS, shadcn/ui
- **Typography**: Inter font family for technical credibility and modern aesthetics (Supabase-style)
- **Icons**: Lucide React for consistent, minimalist iconography
- **Auth**: Supabase (email/password)
- **Text Input**: Basic HTML `<textarea>` + state
- **AI Integration**: Google Gemini API
- **Deployment**: Vercel

## Design System Requirements
### Typography
- **Primary Font**: Inter for all text content (matching Supabase's technical aesthetic)
- **Font Weights**: Light (300), Regular (400), Medium (500), Semibold (600), Bold (700)
- **Line Heights**: Optimized for readability and technical documentation style
- **Approach**: Clean, modern sans-serif that conveys technical competence

### Iconography
- **Icon Library**: Lucide React (24px outline variants)
- **Usage**: Semantic icons with consistent stroke width
- **Consistency**: Uniform sizing and technical aesthetic across all icons

### Visual Design Standards
- **Design Philosophy**: Technical, code-savvy, and flat design approach (inspired by Supabase)
- **Landing Page**: Clean, developer-focused design with flat UI elements and technical credibility
- **Authentication Pages**: Minimal, trustworthy design with flat components and technical aesthetics
- **Application Interface**: Code editor-inspired design optimized for technical users
- **Feature Presentation**: Developer-oriented sections with clear technical value propositions
- **Color Approach**: Flat design with no gradients - solid colors with technical color palette
- **Layout Philosophy**: Grid-based, code-like structure with optimal spacing for technical content
- **User Experience**: Technical competence and developer-friendly interface design

## Functional Requirements
- User authentication
- Step-by-step document analysis workflow
- Separate text input for each document type (Terms of Service and Privacy Policy)
- Store document inputs temporarily for combined analysis
- Send document content to Gemini with document type context
- Parse and display structured responses for each document type
- Generate combined compliance report
- Fully responsive UI

## Non-Functional Requirements
- AI response < 5 seconds per document
- Minimal/no database usage (session storage for document content)
- Secure API handling
- Clear step-by-step UX with progress indicators
- Mobile-first responsive design

## Execution Plan
- Project setup + deploy to Vercel
- Build landing page and auth
- Create step-by-step workflow UI with progress indicators
- Build Terms of Service input and analysis page
- Build Privacy Policy input and analysis page
- Build combined report page
- Wire Gemini API with document type context
- Implement document state management across steps
- Parse and render compliance scores per document
- Add error/loading states
- Polish UI (mobile-ready)
- Final test and deploy

## Risks & Mitigations
- **Vague AI output** → Refine prompt with examples
- **User pastes irrelevant text** → Add guidance and placeholder
- **API rate limits** → Use test key with slow throttle or retry logic

## Future Enhancements
- Accept `.txt` file upload
- AI-generated compliant boilerplates
- Save document history
- Section-highlighting in original text
- Advanced analytics dashboard
- Multi-language support
- API for third-party integrations

## Visual Design Improvement Initiative
### Overview
A comprehensive visual redesign to transform Ecomply into a premium, user-focused compliance platform that maximizes user engagement and trust.

### Design Objectives
1. **Professional Excellence**: Create a polished, enterprise-grade appearance
2. **User Engagement**: Design for maximum visual impact and user retention
3. **Modern Aesthetics**: Implement contemporary design trends and best practices
4. **Brand Consistency**: Establish a cohesive visual identity throughout the application

### Key Improvements
- **Typography**: Migrate to Inter font family for technical credibility and modern aesthetics (Supabase-style)
- **Iconography**: Replace all emoji icons with professional Lucide React icons
- **Landing Page**: Complete redesign with technical, flat design approach and developer-focused presentation
- **Authentication Experience**: Minimal, code-savvy login/signup flow with flat UI components
- **Application Interface**: Technical dashboard and form designs optimized for developer users
- **Color Scheme**: Flat color palette with no gradients - technical and accessible color system
- **Layout**: Developer-inspired spacing, typography hierarchy, and grid-based visual structure
- **Interactive Elements**: Subtle hover states and flat design interactions

### Success Metrics
- Improved technical user engagement rates
- Increased developer-focused conversion from landing page to registration
- Enhanced authentication completion rates with developer-friendly UX
- Reduced form abandonment through technical interface design
- Enhanced user satisfaction with code-savvy interface aesthetics
- Professional technical brand perception among developers and technical users

---

## Gemini Prompt Templates

### Terms of Service Analysis Prompt

```
You are a legal compliance assistant specializing in RA No. 11967 (E-Commerce Law of the Philippines). Analyze the provided Terms of Service document for compliance.

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
- Only return valid JSON
- Do not add any extra explanation outside the JSON
- Be concise but specific
```

### Privacy Policy Analysis Prompt

```
You are a legal compliance assistant specializing in RA No. 11967 (E-Commerce Law of the Philippines). Analyze the provided Privacy Policy document for compliance.

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
- Only return valid JSON
- Do not add any extra explanation outside the JSON
- Be concise but specific
```
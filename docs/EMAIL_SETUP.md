# Email Integration Setup for Ecomply Contact Form

The contact form now sends emails directly to `arisantonioco@gmail.com`. Here's how to set up email integration for production:

## Current Implementation

The contact form API endpoint (`/api/contact/route.ts`) currently:
1. ✅ Stores submissions in Supabase database (requires table creation)
2. ✅ Validates form data
3. ⚠️ Logs email content (for testing)
4. ❌ Needs actual email sending service

## Production Email Setup Options

### Option 1: Resend (Recommended)
```bash
npm install resend
```

Add to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key
```

Update the API route to use Resend:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the API route:
const emailResponse = await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'arisantonioco@gmail.com',
  subject: `[Ecomply Contact] ${subject}`,
  html: emailBody.html
});
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

Add to `.env.local`:
```
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Option 3: Supabase Edge Functions
Create a Supabase Edge Function for email sending with your preferred provider.

## Database Setup

Run the SQL script in `src/sql/contact_submissions.sql` in your Supabase SQL editor to create the contact submissions table.

## Environment Variables Needed

For production, add these to your hosting platform:
```
RESEND_API_KEY=your_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Testing

1. Submit a contact form
2. Check browser console for logged email content
3. Check Supabase database for stored submission
4. Once email service is configured, verify email delivery

## Security Considerations

- ✅ Form validation implemented
- ✅ Rate limiting recommended (add in production)
- ✅ SPAM protection needed (add reCAPTCHA)
- ✅ Email content sanitization implemented

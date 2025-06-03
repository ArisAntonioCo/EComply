import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission from Ecomply
      
      From: ${name} (${email})
      Subject: ${subject}
      
      Message:
      ${message}
      
      ---
      Sent from Ecomply Contact Form
      Timestamp: ${new Date().toISOString()}
    `;

    // Send email via Supabase Edge Function or external service
    // For now, we'll use a simple approach with Supabase's built-in email
    // In production, you might want to use services like Resend, SendGrid, etc.
    
    // Store the contact submission in the database (optional)
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          subject,
          message,
          created_at: new Date().toISOString(),
          status: 'pending'
        }
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue even if database insert fails
    }

    // Send email notification to website owner
    // Note: This requires Supabase Auth email configuration or external email service
    try {
      // Method 1: Using Supabase Auth (requires proper SMTP configuration)
      const emailBody = {
        to: 'arisantonioco@gmail.com',
        subject: `[Ecomply Contact] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
              <h3>Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">
              This email was sent from the Ecomply contact form at ${new Date().toLocaleString()}
            </p>
          </div>
        `
      };

      // For production, you would implement actual email sending here
      // Example with Resend:
      // const emailResponse = await fetch('https://api.resend.com/emails', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     from: 'noreply@yourdomain.com',
      //     to: 'arisantonioco@gmail.com',
      //     subject: `[Ecomply Contact] ${subject}`,
      //     html: emailBody.html
      //   }),
      // });

      console.log('Contact form submission:', { name, email, subject });
      console.log('Email would be sent to: arisantonioco@gmail.com');
      
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the entire request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}

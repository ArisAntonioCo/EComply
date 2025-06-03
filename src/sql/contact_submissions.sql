-- Contact Submissions Table
-- Run this in your Supabase SQL Editor to create the table for storing contact form submissions

CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'responded', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Add RLS (Row Level Security) policies if needed
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow all authenticated users to insert (if you want users to submit forms)
CREATE POLICY "Allow all to insert contact submissions" ON contact_submissions
    FOR INSERT 
    TO authenticated, anon
    WITH CHECK (true);

-- Only allow admin/owner to view submissions (adjust as needed)
CREATE POLICY "Allow admin to view contact submissions" ON contact_submissions
    FOR SELECT 
    TO authenticated
    USING (auth.email() = 'arisantonioco@gmail.com');

-- Add a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_contact_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER contact_submissions_updated_at_trigger
    BEFORE UPDATE ON contact_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_contact_submissions_updated_at();

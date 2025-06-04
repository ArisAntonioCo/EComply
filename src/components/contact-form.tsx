"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 sm:py-32 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="border-green-600 bg-slate-800 text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />                  <h3 className="mt-4 text-base font-semibold text-green-400">
                    Message Sent Successfully!
                  </h3>                  <p className="mt-2 text-sm text-slate-300">
                    Thank you for contacting us! Your message has been sent and we&apos;ll get back to you soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">        <div className="mx-auto max-w-2xl text-center">          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-transparent text-slate-300 text-xs font-medium mb-6">
            <Mail className="w-3 h-3" />
            Get in Touch
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2>          <p className="mt-6 text-base leading-7 text-slate-300">
            Have questions about Ecomply or need help with compliance? We&apos;re here to help.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <Card className="bg-slate-800 border-slate-700 text-white">            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get in Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Mail className="w-3 h-3 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
            {/* Contact Info */}
          <div className="mt-8 text-center p-6 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-400 mb-2">
              For technical support or partnership inquiries:
            </p>
            <p className="text-sm font-medium text-blue-400">
              arisantonioco@gmail.com
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-500">
              <span>Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  };  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 sm:py-32 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Card className="border-green-500/20 bg-gradient-to-br from-green-950/50 to-slate-800 text-white shadow-2xl shadow-green-500/10">
              <CardContent className="pt-8 pb-8">
                <div className="text-center">
                  {/* Success Icon with Animation */}
                  <div className="relative mx-auto mb-6 w-20 h-20">
                    <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                    <div className="relative flex items-center justify-center w-20 h-20 bg-green-500/10 border-2 border-green-500/30 rounded-full">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                  </div>
                  
                  {/* Success Title */}
                  <h3 className="text-2xl font-bold text-green-400 mb-3">
                    Message Sent Successfully!
                  </h3>
                    {/* Success Description */}
                  <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                    Thank you for contacting us! Your message has been sent and we&apos;ll get back to you soon.
                  </p>
                  
                  {/* Additional Info */}
                  <div className="flex items-center justify-center gap-4 mt-6 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-400" />
                      <span>Email delivered to our team</span>
                    </div>
                  </div>
                  
                  {/* Response Time Indicator */}
                  <div className="mt-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600/50">
                    <p className="text-sm text-slate-300">
                      <span className="font-medium text-blue-400">Expected Response Time:</span> Usually within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );  }  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Radial glow effect at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
        {/* Layered radial glow effect - positioned at bottom of section */}
        <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[48rem] h-[20rem] bg-slate-950/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[36rem] h-[15rem] bg-blue-900/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 w-[30rem] h-[12rem] bg-slate-950/12 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[24rem] h-[10rem] bg-blue-800/6 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-[18rem] h-[8rem] bg-slate-950/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-[12rem] h-[6rem] bg-blue-600/8 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-[8rem] h-[4rem] bg-slate-950/15 rounded-full blur-lg"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"><div className="mx-auto max-w-2xl text-center">          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 text-slate-300 text-xs font-medium mb-6">
            <Mail className="w-3 h-3" />
            Get in Touch
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2>          <p className="mt-6 text-base leading-7 text-slate-300">
            Have questions about EComply or need help with compliance? We&apos;re here to help.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <Card className="bg-slate-800 border-slate-700 text-white shadow-lg">            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white text-lg">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get in Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">                  <div>
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
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
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
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
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
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
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
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div><Button 
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
          </Card>          {/* Contact Info */}
          <div className="mt-8 text-center p-6 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-300 mb-2">
              For technical support or partnership inquiries:
            </p>
            <p className="text-sm font-medium text-blue-400">
              arisantonioco@gmail.com
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-slate-400">
              <span>Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

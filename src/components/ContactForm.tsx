'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().optional(),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^(\+27|0)[1-8][0-9]{7,8}$/, 'Invalid South African phone number format'),
  service_interest: z.enum(['Connectivity & Security', 'Telecommunications', 'Office Automation', 'Solar Solutions', 'Business Insurance', 'Multiple Services', 'Other'], {
    message: 'Please select a valid service',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('leads').insert([data]);

      if (error) throw error;

      toast.success('Message sent successfully!', {
        description: 'Thank you for contacting Fine Golding. We will be in touch soon.',
      });
      reset();
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message.', {
        description: error.message || 'Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border border-slate-100 shadow-2xl bg-white rounded-3xl overflow-hidden h-full">
      <CardHeader className="bg-sky-50 border-b border-sky-100 p-8">
        <CardTitle className="text-2xl text-slate-900">Send us a Message</CardTitle>
        <CardDescription className="text-slate-600 mt-2 text-base">
          Fill out the form below and we'll get back to you to discuss your requirements.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register('name')}
                className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-semibold text-slate-900">
                Company Name
              </label>
              <Input
                id="company"
                placeholder="Optional"
                {...register('company')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-900">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-slate-900">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="082 123 4567"
                {...register('phone')}
                className={errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}
              />
              {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service_interest" className="text-sm font-semibold text-slate-900">
              Service Needed <span className="text-red-500">*</span>
            </label>
            <select
              id="service_interest"
              {...register('service_interest')}
              className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.service_interest ? 'border-red-500 focus-visible:ring-red-500' : ''
              }`}
            >
              <option value="">Select a service...</option>
              <option value="Connectivity & Security">Connectivity & Security</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Office Automation">Office Automation</option>
              <option value="Solar Solutions">Solar Solutions</option>
              <option value="Business Insurance">Business Insurance</option>
              <option value="Multiple Services">Multiple Services</option>
              <option value="Other">Other</option>
            </select>
            {errors.service_interest && (
              <p className="text-sm text-red-500">{errors.service_interest.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-slate-900">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              placeholder="How can we help your business?"
              rows={4}
              {...register('message')}
              className={errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold h-12 text-lg transition-all focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Message...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

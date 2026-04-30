'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const faultSchema = z.object({
  client_name: z.string().min(2, 'Client name is required'),
  account_number: z.string().min(2, 'Account number is required'),
  fault_category: z.enum(['Voice', 'Data', 'Print', 'Solar', 'Other'], {
    message: 'Please select a valid category',
  }),
  description: z.string().min(10, 'Please provide more details about the issue'),
});

type FaultFormValues = z.infer<typeof faultSchema>;

export default function FaultForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FaultFormValues>({
    resolver: zodResolver(faultSchema),
  });

  const onSubmit = async (data: FaultFormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('fault_tickets').insert([data]);

      if (error) throw error;

      toast.success('Fault ticket logged successfully!', {
        description: 'Our support team will contact you shortly.',
      });
      reset();
    } catch (error: any) {
      console.error('Error logging fault:', error);
      toast.error('Failed to log fault ticket.', {
        description: error.message || 'Please try again later or contact support directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-white overflow-hidden rounded-3xl">
      <CardHeader className="bg-slate-950 text-white p-8">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-8 w-8 text-sky-400" />
          <CardTitle className="text-2xl">Support Portal</CardTitle>
        </div>
        <CardDescription className="text-slate-300 mt-2 text-base">
          Please provide your account details and describe the issue you are facing.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="client_name" className="text-sm font-semibold text-slate-900">
                Client Name
              </label>
              <Input
                id="client_name"
                placeholder="Company or Contact Name"
                {...register('client_name')}
                className={errors.client_name ? 'border-red-500 focus-visible:ring-red-500' : ''}
              />
              {errors.client_name && (
                <p className="text-sm text-red-500">{errors.client_name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="account_number" className="text-sm font-semibold text-slate-900">
                Account Number
              </label>
              <Input
                id="account_number"
                placeholder="e.g. ACC-12345"
                {...register('account_number')}
                className={errors.account_number ? 'border-red-500 focus-visible:ring-red-500' : ''}
              />
              {errors.account_number && (
                <p className="text-sm text-red-500">{errors.account_number.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="fault_category" className="text-sm font-semibold text-slate-900">
              Fault Category
            </label>
            <select
              id="fault_category"
              {...register('fault_category')}
              className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.fault_category ? 'border-red-500 focus-visible:ring-red-500' : ''
              }`}
            >
              <option value="">Select a category...</option>
              <option value="Voice">Voice / Telephony</option>
              <option value="Data">Data / Internet Connectivity</option>
              <option value="Print">Print / Office Automation</option>
              <option value="Solar">Solar / Power Backup</option>
              <option value="Other">Other</option>
            </select>
            {errors.fault_category && (
              <p className="text-sm text-red-500">{errors.fault_category.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-semibold text-slate-900">
              Description of Issue
            </label>
            <Textarea
              id="description"
              placeholder="Please provide as much detail as possible..."
              rows={5}
              {...register('description')}
              className={errors.description ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description.message}</p>
            )}
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
                Submitting Ticket...
              </>
            ) : (
              'Submit Fault Ticket'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

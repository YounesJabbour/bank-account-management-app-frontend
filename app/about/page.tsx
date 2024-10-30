'use client';

import { Card } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-6xl py-8 md:py-12 lg:py-20 px-4">
      <div className="flex flex-col space-y-8 md:space-y-12">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Building2 className="w-16 h-16 text-primary" />
          </div>
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Bank Accounts Management
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern banking solution built with Next.js and Spring Boot for
            efficient account management
          </p>
        </div>

        <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
          <p className="text-base md:text-lg leading-relaxed">
            Our bank accounts management system is designed to provide a
            seamless banking experience. With a focus on security, efficiency,
            and user experience, we offer comprehensive tools for managing
            customer accounts, tracking transactions, and maintaining accurate
            financial records.
          </p>
        </Card>

        <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
          <div>
            <h2 className="mb-4 text-xl md:text-2xl font-bold">Key Features</h2>
            <div className="grid gap-4 md:grid-cols-2 text-base md:text-lg text-muted-foreground">
              <div className="space-y-2">
                <p>• Customer Profile Management</p>
                <p>• Account Balance Tracking</p>
                <p>• Transaction History</p>
              </div>
              <div className="space-y-2">
                <p>• Secure Authentication</p>
                <p>• Real-time Updates</p>
                <p>• Responsive Design</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
          <h2 className="mb-4 text-xl md:text-2xl font-bold">Our Commitment</h2>
          <p className="text-base md:text-lg leading-relaxed">
            We are dedicated to providing a robust and reliable banking platform
            that meets the evolving needs of our users. Our system is built on
            modern technologies and best practices, ensuring security,
            scalability, and ease of use for both customers and bank
            administrators.
          </p>
        </Card>
      </div>
    </div>
  );
}

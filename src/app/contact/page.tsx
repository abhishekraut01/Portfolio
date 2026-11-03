import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { Separator } from '@/components/ui/separator';
import { contactConfig } from '@/config/Contact';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/contact'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {contactConfig.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {contactConfig.description}
          </p>
        </div>
        <Separator />

        {/* Direct contact */}
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-3">
          {contactConfig.direct.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="rounded-md border border-dashed border-black/20 p-4 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              <p className="text-secondary text-sm">{item.label}</p>
              <p className="mt-1 text-sm font-medium break-all">{item.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form (only when Telegram delivery is configured) */}
        {process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID && (
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        )}
      </div>
    </Container>
  );
}

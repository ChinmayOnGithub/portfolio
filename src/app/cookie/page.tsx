import React from 'react';
import LegalLayout from '../components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Chinmay Patil Portfolio',
  description: 'Cookie Policy explaining our use of essential functional cookies, Google Analytics, Microsoft Clarity, and AdSense tracking cookies.',
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="June 2026">
      <p>
        This Cookie Policy explains how <strong> chinmaypatil.com </strong> uses cookies and similar tracking technologies when you 
        visit our Website and use the utilities on <strong> tools.chinmaypatil.com </strong>.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        1. What Are Cookies?
      </h2>
      <p>
        Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used 
        by website owners to make their websites work, improve efficiency, and provide analytics information.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        2. Types of Cookies We Use
      </h2>
      <p>
        We use both first-party cookies (set by us) and third-party cookies (set by other domains) for several purposes:
      </p>
      <ul className="list-disc pl-6 space-y-3 mt-3">
        <li>
          <strong>Essential Functional Cookies (First-Party):</strong> These are required to operate the technical paper reader client 
          preferences. For instance, when you toggle the font size or select the Sepia, Dark, or Light background tones, 
          a functional cookie remembers your settings so you do not have to reset them on subsequent pages.
        </li>
        <li>
          <strong>Analytics Telemetry Cookies (Third-Party):</strong> Used by Google Analytics and Microsoft Clarity to track page views, 
          visit durations, and user scroll map behaviors. This helps us optimize content placement and page rendering speeds.
        </li>
        <li>
          <strong>Advertising Cookies (Third-Party):</strong> Google AdSense uses cookies to serve ads on our Website. 
          Google\'s use of advertising cookies enables it and its partners to serve ads to users based on their visits to this site 
          and/or other sites on the internet.
        </li>
      </ul>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        3. Cookie Consent and Control
      </h2>
      <p>
        Upon your first visit, standard cookie notice protocols apply. You can manage or disable cookie tracking in the following ways:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>
          Configure your browser settings to automatically decline cookies or notify you when a cookie is being sent.
        </li>
        <li>
          Opt out of personalized Google Ads by visiting 
          <a 
            href="https://adssettings.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--accent-color)] underline mx-1 hover:opacity-80"
          >
            Google Ads Settings
          </a>.
        </li>
        <li>
          To manage preferences regarding third-party behavioral cookies, you can visit resources like 
          <a 
            href="https://www.aboutcookies.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--accent-color)] underline mx-1 hover:opacity-80"
          >
            AboutCookies.org
          </a> 
          or the 
          <a 
            href="https://optout.aboutads.info" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--accent-color)] underline mx-1 hover:opacity-80"
          >
            DAA Opt-Out Program
          </a>.
        </li>
      </ul>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        4. Updates to this Policy
      </h2>
      <p>
        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other 
        operational, legal, or regulatory reasons. Please re-visit this Cookie Policy regularly to stay informed about our use of cookies.
      </p>
    </LegalLayout>
  );
}

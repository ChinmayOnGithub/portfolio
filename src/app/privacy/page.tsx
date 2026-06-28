import React from 'react';
import LegalLayout from '../components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Chinmay Patil Portfolio',
  description: 'Privacy policy for Chinmay Patil\'s personal portfolio website and tools subdomain. Explains cookies, Google Analytics, Microsoft Clarity, and AdSense compliance.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 2026">
      <p>
        This Privacy Policy describes how your personal information is collected, used, and protected when you visit 
        <strong> chinmaypatil.com </strong> (the "Website") and its subdomains, including the browser utilities site 
        <strong> tools.chinmaypatil.com </strong> (the "Services").
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        1. Privacy Commitment
      </h2>
      <p>
        We respect your privacy and are committed to protecting it. The Website is designed as a personal professional portfolio and 
        technical publication repository. Our companion utility site, Browser Tools, is built to be privacy-first.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        2. Client-Side Processing (Local-First Tools)
      </h2>
      <p>
        All applications hosted on <strong> tools.chinmaypatil.com </strong> process data entirely inside your web browser. 
        Any file, text, image, or payload you insert into these utilities is computed locally on the client-side. 
        <strong> No files, personal data, or payloads are uploaded to any server. </strong>
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        3. Information We Collect Automatically
      </h2>
      <p>
        To ensure platform stability, track performance, and maintain AdSense compliance, we integrate the following third-party services:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2">
        <li>
          <strong>Google Analytics & Tag Manager:</strong> Collects anonymous analytical data, including page interaction statistics, 
          approximate geographic location, and device metadata, to help us understand website traffic and performance.
        </li>
        <li>
          <strong>Microsoft Clarity:</strong> Captures anonymous user interactions (clicks, scrolls, and layout performance) 
          via behavioral metrics and heatmaps to optimize readability and resolve layout defects.
        </li>
        <li>
          <strong>Google AdSense:</strong> Serves advertisements on the Website. Google AdSense uses cookies to deliver relevant advertisements 
          based on your browsing history across other domains.
        </li>
      </ul>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        4. Cookies and Advertising Identifiers
      </h2>
      <p>
        This Website uses cookies to save functional settings (such as text size preferences or reading themes on paper reader clients) 
        and support advertising services. You can opt out of personalized Google Ads by visiting 
        <a 
          href="https://adssettings.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--accent-color)] underline mx-1 hover:opacity-80"
        >
          Google Ads Settings
        </a> 
        or configure your browser settings to decline cookies.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        5. Contact Information
      </h2>
      <p>
        If you have any questions or require details regarding the processing of data on this Website, you may contact us at: 
        <a href="mailto:chinmaydpatil09@gmail.com" className="text-[var(--accent-color)] underline ml-1 hover:opacity-80">
          chinmaydpatil09@gmail.com
        </a>.
      </p>
    </LegalLayout>
  );
}

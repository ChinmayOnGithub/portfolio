import React from 'react';
import LegalLayout from '../components/LegalLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Chinmay Patil Portfolio',
  description: 'Terms and Conditions for utilizing Chinmay Patil\'s personal portfolio website and Browser Tools utility services.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="June 2026">
      <p>
        These Terms & Conditions ("Terms") govern your access to and use of 
        <strong> chinmaypatil.com </strong> (the "Website") and its utility subdomain 
        <strong> tools.chinmaypatil.com </strong> (the "Services"). By accessing or using the Website, 
        you agree to be bound by these Terms.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        1. Access and License
      </h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable license to access the Website and use the 
        Browser Tools for personal, non-commercial, and developmental purposes, completely free of charge.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        2. Acceptable Use Policy
      </h2>
      <p>
        You agree not to use the Website or any utility hosted on its subdomains to process, encode, or handle material that 
        is unlawful, malicious, or designed to disrupt systems. You agree not to attempt to reverse engineer, scrape, or automate 
        the exhaustion of resources on our server components.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        3. Intellectual Property
      </h2>
      <p>
        The source code of the portfolio, the technical papers, and the Browser Tools are open-source. However, the unique design system, 
        visual assets, and layout representations remain the property of Chinmay Patil. The contents of the research papers and files 
        hosted represent original work unless otherwise cited.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        4. Third-Party Integrations and Ads
      </h2>
      <p>
        We integrate Google AdSense to serve advertisements, and Google Analytics alongside Microsoft Clarity for traffic telemetry. 
        By using this Website, you acknowledge that your usage behavior is governed by Google\'s and Microsoft\'s respective terms of service 
        and privacy conditions.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        5. Disclaimer of Warranties
      </h2>
      <p>
        The Website and the Services are provided "as is" and "as available" without warranties of any kind, either express or implied, 
        including but not limited to the implied warranties of merchantability or fitness for a particular purpose. We do not guarantee 
        that any tool will operate uninterrupted, error-free, or yield 100% accurate outputs.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        6. Limitation of Liability
      </h2>
      <p>
        In no event shall Chinmay Patil be liable for any direct, indirect, incidental, special, or consequential damages arising out of 
        or in connection with your use or inability to use the Website, technical papers, or Browser Tools.
      </p>

      <h2 className="text-xl lg:text-2xl font-bold font-cormorant text-[var(--accent-color)] mt-8">
        7. Amendments and Governing Law
      </h2>
      <p>
        We reserve the right to amend these Terms at any time. These Terms are governed by and construed in accordance with the laws of India, 
        without giving effect to any principles of conflicts of law.
      </p>
    </LegalLayout>
  );
}

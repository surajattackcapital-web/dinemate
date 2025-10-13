'use client';

import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does DineMate.ai integrate with existing restaurant systems?",
      answer: "DineMate.ai seamlessly integrates with most major POS systems, reservation platforms, and property management systems. Our team handles the technical setup, typically completing integration within 24-48 hours with minimal disruption to operations."
    },
    {
      question: "What happens if the AI makes a mistake?",
      answer: "Our AI maintains 99%+ accuracy, but we've built in smart escalation protocols. If the AI encounters uncertainty, it can transfer to your staff seamlessly. Plus, all interactions are logged for quality assurance and continuous improvement."
    },
    {
      question: "How long does implementation take?",
      answer: "Most restaurants are up and running within 1-2 weeks. This includes system integration, staff training, and AI customization to your menu and policies. Our white-glove onboarding ensures a smooth transition."
    },
    {
      question: "Can the AI handle dietary restrictions and modifications?",
      answer: "Absolutely! Our AI is trained to understand complex dietary requirements (allergies, vegan, gluten-free, etc.) and modification requests. It can intelligently suggest alternatives and flag potential allergen concerns."
    },
    {
      question: "What languages does the AI support?",
      answer: "DineMate.ai currently supports 40+ languages including English, Spanish, French, Mandarin, Japanese, and more. The AI automatically detects the guest's language and responds accordingly."
    },
    {
      question: "How much does DineMate.ai cost?",
      answer: "Pricing is customized based on your restaurant size, features needed, and call volume. Most restaurants see positive ROI within 2-3 months through reduced labor costs and increased revenue. Contact us for a personalized quote."
    },
    {
      question: "Does DineMate.ai work for multi-location restaurants?",
      answer: "Yes! We support everything from single locations to enterprise chains with hundreds of locations. Our platform provides centralized management with location-specific customization."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, a dedicated account manager, regular performance reviews, and continuous AI optimization. Our team is always available to help you maximize the value of your investment."
    },
    {
      question: "Can I customize the AI's voice and personality?",
      answer: "Yes! We can customize the AI's voice, tone, speaking pace, and even personality traits to match your brand. Whether you want professional and polished or warm and casual, we'll configure it to your preferences."
    },
    {
      question: "How secure is guest data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest, we're PCI DSS compliant for payment processing, and we follow GDPR and CCPA guidelines. We never sell guest data to third parties."
    }
  ];

  return (
    <div className="wrapper padding-section-large">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="animated-gradient-text mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about DineMate.ai
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="background-glass rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition"
              >
                <h3 className="text-xl font-semibold pr-4">{faq.question}</h3>
                <span className="text-3xl text-purple-400 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Still Have Questions */}
        <section className="background-glass p-12 rounded-2xl text-center">
          <h2 className="gradient-text text-3xl mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6">
            Our team is here to help. Schedule a call or send us a message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="button">
              Contact Us
            </a>
            <a href="/contact" className="button">
              Schedule a Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


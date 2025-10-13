import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Restaurant AI Solutions",
  description: "Find answers to common questions about DineMate.ai's restaurant automation solutions. Learn about pricing, implementation, integrations, support, and how our AI can transform your hospitality business.",
  keywords: "DineMate FAQ, restaurant AI questions, hospitality automation FAQ, AI implementation, restaurant technology support",
  openGraph: {
    title: "FAQs - DineMate.ai Restaurant AI Solutions",
    description: "Get answers to your questions about AI-powered restaurant automation, pricing, implementation, and support.",
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


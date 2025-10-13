import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Started with AI Solutions",
  description: "Ready to transform your restaurant with AI? Contact DineMate.ai today for a free demo. Our team will help you streamline operations and enhance guest experiences. Book your consultation now.",
  keywords: "contact DineMate, restaurant AI demo, hospitality AI consultation, book demo, AI solution inquiry",
  openGraph: {
    title: "Contact DineMate.ai - Book Your Free Demo",
    description: "Ready to transform your restaurant with AI? Contact us today for a free demo and consultation.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Restaurant & Hospitality Solutions",
  description: "Transform your restaurant operations with DineMate.ai's intelligent solutions. Automate waitlists, streamline ordering, manage reservations, and collect valuable feedback. Boost efficiency by 40% and enhance guest experiences.",
  keywords: "AI restaurant solutions, restaurant automation, hospitality AI, smart waitlist management, AI ordering system, reservation automation, restaurant feedback system, hospitality technology",
  openGraph: {
    title: "DineMate.ai - AI-Powered Restaurant & Hospitality Solutions",
    description: "Transform your restaurant operations with intelligent AI solutions. Automate waitlists, streamline ordering, and enhance guest experiences.",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rilwan Aribidesi - Portfolio",
  description: `Solution-driven Full-stack Engineer with over 3 years of working experience building customer-focused products and services. Designed and developed multiple web and mobile apps across multiple APIs, third-party integrations and databases. Thrive in working in a fast-paced, high-tech environment with cross-functional teams using agile methodology.`,
  keywords: [
    "frontend developer",
    "frontend engineer",
    "full-stack engineer",
    "full-stack developer",
    "typescript",
    "nodejs",
    "reactjs",
    "nextjs",
    "dev",
    "daily.dev",
  ],
  icons:
    "https://rilwanthedev.netlify.app/_next/image?url=%2Favatar-1.jpg&w=1920&q=75",

  authors: [
    {
      name: "Rilwan Aribidesi",
      url: "https://www.linkedin.com/in/rilwanthedev/",
    },
  ],
  category: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

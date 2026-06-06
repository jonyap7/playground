import "./globals.css";

export const metadata = {
  title: "WhatsBiz GIG — Find Work Today. Find Staff Today.",
  description: "Fast gig-work matching for Malaysia. Post a job in 30 seconds, find work in 30 seconds.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

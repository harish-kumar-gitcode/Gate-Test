import "@/assets/styles/globals.css";

// ROOT LAYOUT

export const metadata = {
  title: "Nuero Cademy - Institue for GATE Coaching.",
  description: "Nuero Cademy offers first class opputunity for students.",
  openGraph: {
    title: "Nuero Cademy - Institue for GATE Coaching",
    description: "Nuero Cademy offers first class opputunity for students.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Nuero Cademy",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

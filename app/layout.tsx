import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Monnier | Conciergerie de Luxe & Butler Privé — Côte d'Azur",
  description: "Conciergerie privée, gestion de résidence et butler de luxe sur la Côte d'Azur. Maison Monnier accompagne propriétaires et voyageurs d'exception avec discrétion et excellence.",
  keywords: ["conciergerie luxe", "villa management côte d'azur", "butler privé", "gestion résidence", "luxury concierge french riviera", "UHNW services", "private concierge cannes", "villa management france"],
  authors: [{ name: "Maison Monnier" }],
  robots: "index, follow",
  openGraph: {
    title: "Maison Monnier | Conciergerie de Luxe & Butler Privé",
    description: "Conciergerie privée et gestion de résidence d'exception sur la Côte d'Azur.",
    url: "https://www.maisonmonnier.fr",
    siteName: "Maison Monnier",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.maisonmonnier.fr",
    languages: {
      'fr-FR': 'https://www.maisonmonnier.fr',
      'en-GB': 'https://www.maisonmonnier.fr/en',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Maison Monnier",
          "description": "Conciergerie privée, gestion de résidence et butler de luxe sur la Côte d'Azur",
          "url": "https://www.maisonmonnier.fr",
          "sameAs": ["https://www.instagram.com/maison.monnier", "http://linkedin.com/in/sébastien-monnier-davaille-6b697a46"],
          "address": { "@type": "PostalAddress", "addressRegion": "Provence-Alpes-Côte d'Azur", "addressCountry": "FR" },
          "areaServed": ["Côte d'Azur", "France", "Italie", "Laponie", "Croatie"],
          "priceRange": "$$$$",
          "serviceType": ["Luxury Concierge", "Villa Management", "Private Butler", "Staff Placement"]
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

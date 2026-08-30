import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Header } from "../components/Header";
import { Container } from "../components/v2/Container";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neurologe-sig.de"),
  title: {
    default: "Онлайн-консультация невролога из Германии | Женис Аязбаев",
    template: "%s | Женис Аязбаев"
  },
  description:
    "Женис Аязбаев, Facharzt für Neurologie в Германии. Онлайн-консультации и неврологическое второе мнение на русском и немецком языках.",
  keywords: [
    "невролог Германия онлайн",
    "консультация невролога на русском",
    "русскоязычный невролог в Германии",
    "неврологическое второе мнение",
    "Neurologe Russisch Deutschland",
    "neurologische Online-Beratung",
    "Женис Аязбаев",
    "Zhenis Ayazbayev"
  ],
  authors: [{ name: "Женис Аязбаев", url: "/about" }],
  creator: "Женис Аязбаев",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  },
  openGraph: {
    title: "Онлайн-консультация невролога из Германии | Женис Аязбаев",
    description: "Neurologische Online-Beratung und Zweitmeinung auf Russisch und Deutsch — Facharzt für Neurologie in Deutschland.",
    type: "website",
    url: "/",
    siteName: "Женис Аязбаев · Neurologie Online",
    locale: "ru_RU",
    alternateLocale: ["de_DE"]
  },
  twitter: {
    card: "summary",
    title: "Онлайн-консультация невролога из Германии",
    description: "Консультации и второе мнение на русском и немецком языках."
  }
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://neurologe-sig.de/#physician",
  url: "https://neurologe-sig.de/",
  name: "Zhenis Ayazbayev",
  alternateName: "Женис Аязбаев",
  image: "https://neurologe-sig.de/zhenis-ayazbayev.jpg",
  medicalSpecialty: "https://schema.org/Neurologic",
  availableLanguage: ["Russian", "German"],
  areaServed: ["Germany", "Kazakhstan", "Kyrgyzstan", "Uzbekistan"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Западно-Казахстанская медицинская академия"
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Approbation als Arzt in Deutschland",
      credentialCategory: "Medical license"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Facharztanerkennung Neurologie",
      credentialCategory: "Medical specialty recognition"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Diplom als Arzt",
      credentialCategory: "Medical degree"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Primäre Spezialisierung Psychiatrie und Narkologie am W. M. Bechterew-Institut",
      credentialCategory: "Postgraduate medical specialization"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Fachzertifikat Psychiater-Narkologe am W. M. Bechterew-Institut",
      credentialCategory: "Medical specialist certificate"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Master of Medical Sciences",
      credentialCategory: "Master degree"
    }
  ],
  description: "Facharzt für Neurologie in Deutschland. Online-Sprechstunde und neurologische Zweitmeinung auf Russisch und Deutsch."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" data-lang="ru">
      <body>
        <Script
          id="language-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "try{var saved=localStorage.getItem('site-language');var zone=Intl.DateTimeFormat().resolvedOptions().timeZone;var fallback=(zone==='Europe/Berlin'?'de':'ru');var language=(saved==='de'||saved==='ru')?saved:fallback;document.documentElement.dataset.lang=language;document.documentElement.lang=language}catch(e){document.documentElement.dataset.lang='ru'}"
          }}
        />
        <Script
          id="physician-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <Header />
        <main>{children}</main>
        <footer className="v2-footer">
          <Container className="v2-footer-grid">
            <div>
              <Link href="/" className="v2-brand v2-footer-brand" aria-label="На главную">
                <span className="v2-brand-mark" aria-hidden="true">N</span>
                <span><span className="ru-only">Женис Аязбаев</span><span className="de-only">Zhenis Ayazbayev</span></span>
              </Link>
              <p className="v2-footer-muted ru-only">Facharzt für Neurologie · консультации на русском и немецком</p>
              <p className="v2-footer-muted de-only">Facharzt für Neurologie · Beratung auf Deutsch und Russisch</p>
            </div>
            <div className="v2-footer-note">
              <p className="ru-only">Онлайн-консультация не заменяет экстренную помощь или очный осмотр.</p>
              <p className="de-only">Eine Online-Beratung ersetzt weder den Notdienst noch eine notwendige Untersuchung vor Ort.</p>
              <p className="ru-only">© {new Date().getFullYear()} Женис Аязбаев</p>
              <p className="de-only">© {new Date().getFullYear()} Zhenis Ayazbayev</p>
            </div>
          </Container>
        </footer>
      </body>
    </html>
  );
}

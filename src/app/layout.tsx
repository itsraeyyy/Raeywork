import Script from 'next/script';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Raey — Founder / Builder",
  description: "Raey is a founder and builder making software, products, and systems around problems worth solving.",
  metadataBase: new URL('https://raey.work'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Raey — Founder / Builder",
    description: "I make things I want to exist.",
    url: "https://raey.work",
    siteName: "Raey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="author" content="Raey Tesfaye" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#080808" />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(()=>{let theme='light';try{theme=localStorage.getItem('ds.theme')||localStorage.getItem('portfolio-theme')||'light'}catch{}document.documentElement.dataset.theme=['light','dark'].includes(theme)?theme:'light'})();`,
          }}
        />
        <link rel="canonical" href="https://raey.work/" />
        
        <link rel="icon" href="/fonts/favicon.4dd602b4.cache.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.c25dadaa.cache.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --creative-heading-font: ${outfit.style.fontFamily}, sans-serif;
            --creative-body-font: ${outfit.style.fontFamily}, sans-serif;
          }
          body * {
            font-family: ${outfit.style.fontFamily}, sans-serif !important;
          }
        `}} />
        
        <link rel="stylesheet" href="/css/home.2e7134e3.cache.css" />
        <link rel="stylesheet" href="/css/styles.b0af5a5c.cache.css" />
        <link rel="stylesheet" href="/css/golden.110d1126.cache.css" />
        <link rel="stylesheet" href="/css/typography.45c1dba2.cache.css" />
        
        <Script src="/js/boot.f2a2f7aa.cache.js" strategy="afterInteractive"></Script>
        <Script src="/js/locales.140bf509.cache.js" strategy="afterInteractive"></Script>
        <Script src="/js/recovery.5c0f6783.cache.js" strategy="afterInteractive"></Script>
        <Script src="/js/home.ffc45fa9.cache.js" strategy="afterInteractive"></Script>
        <Script src="/js/main.b8fe1b1a.cache.js" type="module" strategy="afterInteractive"></Script>
        
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `{"@context":"https://schema.org","@type":"Person","name":"Raey Tesfaye","url":"https://raey.work/","jobTitle":"Founder / Builder","address":{"@type":"PostalAddress","addressLocality":"Addis Ababa","addressCountry":"ET"}}`
          }}
        />
      </head>
      <body suppressHydrationWarning className={outfit.className}>
        {children}
      </body>
    </html>
  );
}

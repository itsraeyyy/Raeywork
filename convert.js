/* eslint-disable */
const fs = require('fs');
const path = require('path');

const htmlPath = 'C:\\\\Users\\\\HP\\\\.gemini\\\\antigravity-ide\\\\brain\\\\a8ef5e30-0bf5-4d52-8130-71631ae862e6\\\\scratch\\\\scraper\\\\scraped_site\\\\index.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

let bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
  bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
}
let bodyHtml = bodyMatch ? bodyMatch[1] : '';

// Fix paths
bodyHtml = bodyHtml.replace(/(href|src)="((?!http)[^"]+)"/g, (match, p1, p2) => {
  if (!p2.startsWith('/')) {
    return `${p1}="/${p2}"`;
  }
  return match;
});

// Basic JSX conversions
bodyHtml = bodyHtml
  .replace(/class="/g, 'className="')
  .replace(/stroke-width="/g, 'strokeWidth="')
  .replace(/stroke-linecap="/g, 'strokeLinecap="')
  .replace(/stroke-linejoin="/g, 'strokeLinejoin="')
  .replace(/aria-hidden="true"/g, 'aria-hidden="true"')
  .replace(/for="/g, 'htmlFor="')
  .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
  .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
  .replace(/<source([^>]+[^\/])>/g, '<source$1 />')
  .replace(/<br>/g, '<br />');

// Remove the cloudflare scripts at the end if any
bodyHtml = bodyHtml.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, (match) => {
  if (match.includes('cloudflare') || match.includes('__CF$cv$params')) return '';
  // Convert other scripts to dangerouslySetInnerHTML or just keep them
  // For simplicity, we can let Next.js run them if they don't have document.write
  return match;
});

const pageTsx = `
export default function Page() {
  return (
    <>
      ${bodyHtml}
    </>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'page.tsx'), pageTsx);

// Now layout
const layoutTsx = `
import "./globals.css";

export const metadata = {
  title: "Dani Asyrofi | Product designer, building in code",
  description: "Dani Asyrofi is a product designer in Jakarta helping founders turn complex ideas into clear, thoughtful products through product design and code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="author" content="Muhammad Dani Asyrofi" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#080808" />
        <script
          dangerouslySetInnerHTML={{
            __html: \`(()=>{let theme='dark';try{theme=localStorage.getItem('ds.theme')||localStorage.getItem('portfolio-theme')||'dark'}catch{}document.documentElement.dataset.theme=['light','dark'].includes(theme)?theme:'dark'})();\`,
          }}
        />
        <link rel="canonical" href="https://daniasyrofi.com/" />
        
        <link rel="icon" href="/fonts/favicon.4dd602b4.cache.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.c25dadaa.cache.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/inter-latin-variable.dd8a4575.cache.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        <link rel="stylesheet" href="/css/home.2e7134e3.cache.css" />
        <link rel="stylesheet" href="/css/styles.b0af5a5c.cache.css" />
        <link rel="stylesheet" href="/css/golden.110d1126.cache.css" />
        <link rel="stylesheet" href="/css/typography.45c1dba2.cache.css" />
        
        <script src="/js/boot.f2a2f7aa.cache.js" defer></script>
        <script src="/js/locales.140bf509.cache.js" defer></script>
        <script src="/js/recovery.5c0f6783.cache.js" defer></script>
        <script src="/js/home.ffc45fa9.cache.js" defer></script>
        <script src="/js/main.b8fe1b1a.cache.js" type="module"></script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: \`{"@context":"https://schema.org","@type":"Person","name":"Muhammad Dani Asyrofi","alternateName":"Dani Asyrofi","url":"https://daniasyrofi.com/","jobTitle":"Product Designer","worksFor":{"@type":"Organization","name":"Abadikan"},"address":{"@type":"PostalAddress","addressLocality":"Jakarta","addressCountry":"ID"},"sameAs":["https://linkedin.com/in/daniasyrofi","https://x.com/dani_asyrofi","https://dribbble.com/daniasyrofi","https://daniasyrofi.medium.com/"]}\`
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'layout.tsx'), layoutTsx);
console.log("Successfully generated layout.tsx and page.tsx");

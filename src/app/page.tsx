
export default function Page() {
  return (
    <>
      
  <a className="skip-link" href="#main">Skip to content</a>
  <main className="folio" id="main">
    <div className="column-measure" aria-hidden="true"><span id="column-width">600 px</span></div>
    <header className="intro" id="top">
      <div className="masthead">
        <span className="place">ADDIS ABABA <span className="quiet">/</span> <time id="addis-ababa-time" aria-label="Current time in Addis Ababa" suppressHydrationWarning>GMT+3</time></span>
        <div className="page-controls">
          <button type="button" className="theme-control" id="theme-toggle" aria-label="Switch to dark mode" aria-pressed="false">
            <svg className="theme-icon icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#sun"></use></svg>
            <svg className="theme-icon icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#moon"></use></svg>
            <span className="control-tooltip" id="theme-label">Dark mode</span>
          </button>
        </div>
      </div>
      <div className="portrait-line annotated">
        <figure className="portrait" id="portrait" data-gaze="center" role="img" aria-label="Portrait of Raey, following the cursor">
          <div className="portrait-theme portrait-light" aria-hidden="true"><img src="/images/portrait-light-directions-360.d78c320b.cache.webp" srcSet="images/portrait-light-directions-360.d78c320b.cache.webp 360w, images/portrait-light-directions-600.8b045b8d.cache.webp 600w, images/portrait-light-directions-720.5084a1a9.cache.webp 720w, images/portrait-light-directions-1080.27cbb446.cache.webp 1080w" sizes="(max-width: 680px) 336px, 360px" width="1254" height="1254" alt="" className="portrait-fallback" decoding="async" fetchPriority="high" /><span className="portrait-sprite is-active" data-layer="a"></span><span className="portrait-sprite" data-layer="b"></span></div>
          <div className="portrait-theme portrait-dark" aria-hidden="true"><img src="/images/portrait-dark-directions-360.4d0f3bce.cache.webp" srcSet="images/portrait-dark-directions-360.4d0f3bce.cache.webp 360w, images/portrait-dark-directions-600.863539ef.cache.webp 600w, images/portrait-dark-directions-720.79d4ed7f.cache.webp 720w, images/portrait-dark-directions-1080.08def202.cache.webp 1080w" sizes="(max-width: 680px) 336px, 360px" width="1254" height="1254" alt="" className="portrait-fallback" decoding="async" /><span className="portrait-sprite is-active" data-layer="a"></span><span className="portrait-sprite" data-layer="b"></span></div>
        </figure>
        <div className="portrait-atmosphere"><div className="starfield" aria-hidden="true"><i className="star star-a"></i><i className="star star-b"></i><i className="star star-c"></i><i className="star star-d"></i><i className="star star-e"></i><i className="shooting-star shooting-one"></i><i className="shooting-star shooting-two"></i></div><p className="slogan">Making things I want<br />to exist.</p></div>
        <span className="margin-note note-left" data-copy="notePortrait" aria-hidden="true"><b>01 / Eight directions</b>The portrait changes depending on where you&apos;re looking. Eight frames, no interpolation.</span>
      </div>
      <div className="name-block annotated">
        <h1>Raey Tesfaye</h1>
        <p className="role" data-copy="role">Founder, builder, making things I want to exist.</p>
        <span className="margin-note note-right" data-copy="noteType" aria-hidden="true"><b>02 / Why this exists</b>I wanted this site to feel more like a place than a résumé.</span>
      </div>
      <div className="intro-copy">
        <p data-copy="introOne">I build software and companies around problems I can&apos;t stop thinking about.</p>
        <p data-copy="introTwo">Currently building Smoooth and Andebet. One is about changing how software gets built. The other is about making conversations useful.</p>
        <p data-copy="introThree">I like starting with a blank page, figuring things out, and shipping something real.</p>
      </div>
      <div className="intro-actions">
        <a className="contact-link" href="/email-protection.html#2c44494040436c484d42454d5f555e434a45024f4341135f594e46494f5811604958091e1b5f091e1c414d4749091e1c5f434149584445424b" data-copy="letsTalk">Let&apos;s talk <span aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></a>
        <button className="notes-toggle" id="notes-toggle" type="button" aria-pressed="false"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#viewfinder-circle"></use></svg><span data-copy="openNotes">Behind the build</span></button>
      </div>
    </header>
    <section className="section annotated" id="work" aria-labelledby="work-title">
      <div className="section-heading"><h2 id="work-title" data-copy="workHeading">Built to be used</h2><span className="section-aside" data-copy="workAside">Things I&apos;ve made.</span></div>
      <span className="margin-note note-left" data-copy="noteWork" aria-hidden="true"><b>03 / Ideas, made tangible</b>Working tools you can open, explore, and use.</span>
      <div className="work-list">
        <a className="work-item" href="#" target="_blank" rel="noreferrer">
          <span className="work-preview preview-smoooth" aria-hidden="true"></span>
          <span className="work-copy"><span className="work-title">Smoooth <span className="work-arrow" aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></span><span className="work-description" data-copy="smooothDetail">Agentic software delivery.</span><span className="work-kind" data-copy="smooothRole">Founder / Builder</span></span>
        </a>
        <a className="work-item" href="#" target="_blank" rel="noreferrer">
          <span className="work-preview preview-andebet" aria-hidden="true"></span>
          <span className="work-copy"><span className="work-title">Andebet <span className="work-arrow" aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></span><span className="work-description" data-copy="andebetDetail">Turning conversations into useful work.</span><span className="work-kind" data-copy="andebetRole">Founder / Builder</span></span>
        </a>
        <a className="work-item" href="#" target="_blank" rel="noreferrer">
          <span className="work-preview preview-icodis" aria-hidden="true"></span>
          <span className="work-copy"><span className="work-title">ICODIS <span className="work-arrow" aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></span><span className="work-description" data-copy="icodisDetail">Digital inspection infrastructure.</span><span className="work-kind" data-copy="icodisRole">Founder / Builder</span></span>
        </a>
        <a className="work-item" href="#" target="_blank" rel="noreferrer">
          <span className="work-preview preview-govsync" aria-hidden="true"></span>
          <span className="work-copy"><span className="work-title">GovSync <span className="work-arrow" aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></span><span className="work-description" data-copy="govsyncDetail">Meeting accountability infrastructure.</span><span className="work-kind" data-copy="govsyncRole">Founder / Builder</span></span>
        </a>
      </div>
    </section>
    <section className="section annotated" id="experiments" aria-labelledby="experiments-title">
      <div className="section-heading"><h2 id="experiments-title" data-copy="experimentsHeading">Experiments</h2><span className="section-aside" data-copy="experimentsAside">Small things I build because I can&apos;t stop thinking about them.</span></div>
      <div className="work-list">
        <a className="work-item" href="/index_1.html" target="_blank" rel="noreferrer">
          <span className="work-preview preview-loading" aria-hidden="true"><span className="loading-orbit"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></span>
          <span className="work-copy"><span className="work-title">Loading <span className="work-arrow" aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></span><span className="work-description" data-copy="loadingDetail">A playground for loading states and interface feedback.</span><span className="work-kind" data-copy="loadingRole">Design &amp; development</span></span>
        </a>
      </div>
    </section>
    <section className="section writing-section annotated" id="writing" aria-labelledby="writing-title">
      <div className="section-heading"><h2 id="writing-title" data-copy="writingHeading">Thinking</h2></div>
      <span className="margin-note note-right" data-copy="noteShelf" aria-hidden="true"><b>04 / A closer look</b>Pick up a cover, turn it around, or jump into the notes.</span>
      <div className="writing-shelf" id="writing-shelf" role="region" aria-label="Notes by Raey Tesfaye">
        <div className="book-stage" id="book-stage"><div className="book-lineup" id="book-lineup"></div></div>
        <div className="shelf-toolbar" id="shelf-toolbar" hidden><span className="shelf-hint" data-copy="shelfHint">Pick a cover to take a closer look.</span><div className="shelf-navigation"><span className="book-counter" id="book-counter">01 / 03</span><button type="button" className="icon-button" id="book-prev" aria-label="Previous article"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-left"></use></svg></button><button type="button" className="icon-button" id="book-next" aria-label="Next article"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-right"></use></svg></button></div></div>
        <p id="shelf-announcement" lang="en" className="sr-only" role="status" aria-live="polite"></p>
        <div className="shelf-fallback" id="shelf-fallback"><a href="#" target="_blank" rel="noreferrer">Building in the age of abundant intelligence <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a><a href="#" target="_blank" rel="noreferrer">What I&apos;m learning building Smoooth <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a><a href="#" target="_blank" rel="noreferrer">Why Ethiopian software needs to be built differently <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a></div>
      </div>
    </section>
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading"><h2 id="about-title" data-copy="aboutHeading">A little background</h2></div>
      <p data-copy="aboutOne">I started building because I kept finding things I wanted to exist and couldn&apos;t find them.</p>
      <p data-copy="aboutTwo">I&apos;ve worked across software, government systems, product development and independent projects, mostly teaching myself by building the thing in front of me.</p>
      <p data-copy="aboutThree">Today I&apos;m focused on building companies and becoming a better engineer. I&apos;m particularly interested in AI, infrastructure, and the strange problems that appear when technology meets the real world.</p>
    </section>
    <section className="section now-section" id="now" aria-labelledby="now-title">
      <div className="section-heading"><h2 id="now-title" data-copy="nowHeading">NOW</h2><span className="section-aside" data-copy="nowAside">September 2026</span></div>
      <div className="now-content">
        <div className="now-category">
          <h3>Building</h3>
          <p>Smoooth</p>
          <p>Andebet</p>
        </div>
        <div className="now-category">
          <h3>Learning</h3>
          <p>Machine learning</p>
          <p>Systems engineering</p>
        </div>
        <div className="now-category">
          <h3>Exploring</h3>
          <p>...</p>
        </div>
      </div>
    </section>
    <footer className="section contact-section annotated" id="contact">
      <span className="margin-note note-left" data-copy="noteContact" aria-hidden="true"><b>05 / It starts here</b>A good product starts with a conversation.</span>
      <h2 data-copy="contactHeading">Want to build something?</h2><p data-copy="contactCopy">I&apos;m usually interested in ambitious problems, strange ideas, and people who actually want to ship.</p>
      <a className="email-link" href="mailto:hello%40raey.work">hello<span>@</span>raey.work <span aria-hidden="true"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></span></a>
      <nav className="socials" aria-label="Social profiles"><a href="#" target="_blank" rel="noreferrer">EMAIL <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a><a href="#" target="_blank" rel="noreferrer">X <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a><a href="#" target="_blank" rel="noreferrer">GITHUB <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a><a href="#" target="_blank" rel="noreferrer">LINKEDIN <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a></nav>
      <div className="colophon"><span>© <span id="year">2026</span> Raey Tesfaye</span><span data-copy="footerNote">MADE IN ADDIS ABABA</span></div>
    </footer>
  </main>
  <dialog className="book-dialog" id="book-dialog" aria-labelledby="dialog-title">
    <button type="button" className="dialog-close" id="book-close" aria-label="Close article preview"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" strokeLinecap="round"></path></svg></button>
    <div className="book-dialog-inner">
      <div className="book-inspection">
        <div className="inspection-visual"><div className="inspection-stage" id="inspection-stage" aria-label="Article cover"><div id="inspection-book"></div></div><div className="rotate-actions"><button type="button" className="icon-button" id="rotate-left" aria-label="Rotate cover left"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 11a7 7 0 1 0-2 6M19 5v6h-6" strokeLinecap="round" strokeLinejoin="round"></path></svg></button><span data-copy="rotateHint">Drag to turn</span><button type="button" className="icon-button" id="rotate-right" aria-label="Rotate cover right"><svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 11a7 7 0 1 0-2 6M19 5v6h-6" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div></div>
        <div className="inspection-copy"><span className="book-kicker" id="dialog-category"></span><h2 id="dialog-title" lang="en"></h2><p id="dialog-description"></p><span className="byline" id="dialog-byline"></span><a className="read-article" id="dialog-read" href="/index_2.html" target="_blank" rel="noreferrer" data-copy="readArticle">Read on Medium <svg className="hero-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><use href="/fonts/heroicons.b4a48b73.cache.svg#arrow-up-right"></use></svg></a></div>
      </div>
    </div>
  </dialog>



    </>
  );
}

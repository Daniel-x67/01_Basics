
import './App.css'

function App() {
  return (
    <main className="profile-page">
      <header className="topbar">
        <a className="brand-mark" href="#start" aria-label="Daniel Innerkofler, Startseite">
          DI<span>.</span>
        </a>
        <span className="topbar-note">PERSÖNLICHES PORTRÄT</span>
        <a className="topbar-link" href="#profil">Steckbrief <span aria-hidden="true">↘</span></a>
      </header>

      <section className="intro" id="start" aria-labelledby="page-title">
        <div className="intro-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Ein Porträt in kurzen Zügen</p>
          <h1 id="page-title">Daniel<br /><span>Innerkofler.</span></h1>
          <p className="intro-text">
            Geboren am 7. September 2010. Was ihn begeistert, erzählt er am besten selbst.
          </p>
          <a className="text-link" href="#profil">Zum Steckbrief <span aria-hidden="true">↓</span></a>
        </div>

        <div className="monogram-art" aria-label="Monogramm DI" role="img">
          <div className="art-ring art-ring-outer" />
          <div className="art-ring art-ring-inner" />
          <span className="art-cross art-cross-one" />
          <span className="art-cross art-cross-two" />
          <span className="monogram">D<span>I</span></span>
          <span className="art-caption">DANIEL<br />INNERKOFLER</span>
          <span className="art-year">2010</span>
        </div>
        <span className="vertical-note" aria-hidden="true">VORSTELLUNG · 01</span>
      </section>

      <section className="profile-section" id="profil" aria-labelledby="profile-title">
        <div className="section-heading">
          <p className="eyebrow">01 <span className="heading-rule" /> STECKBRIEF</p>
          <h2 id="profile-title">Das Wichtigste<br />auf einen Blick.</h2>
        </div>
        <dl className="facts-list">
          <div className="fact-row">
            <dt>Name</dt>
            <dd>Daniel Innerkofler</dd>
            <span className="fact-index">01</span>
          </div>
          <div className="fact-row">
            <dt>Geboren</dt>
            <dd>7. September 2010</dd>
            <span className="fact-index">02</span>
          </div>
        </dl>
      </section>

      <footer className="page-footer">
        <a className="brand-mark footer-mark" href="#start" aria-label="Zurück nach oben">DI<span>.</span></a>
        <span>Daniel Innerkofler</span>
        <a className="back-to-top" href="#start">Zurück nach oben <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  )
}

export default App

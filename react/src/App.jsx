import StatCard from "./components/StatCard.jsx";

export default function App() {
  return (
    <div className="app-root">
      <div className="glow-bg" />

      <header className="app-header">
        <div className="logo-mark">{">_"} setup</div>
        <div className="header-pill">React template • Dark terminal theme</div>
      </header>

      <main className="app-main">
        <section className="hero">
          <div>
            <h1 className="hero-title">
              Spin up full‑stack prototypes
              <span className="hero-title-accent"> before your coffee cools.</span>
            </h1>
            <p className="hero-subtitle">
              This React starter was generated with <span className="accent">Setup CLI</span>.
              Edit this page, wire your API, and ship something real today.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">
                npx setup myapp --preset react-express-mongo
              </button>
              <button className="ghost-btn">Open project structure</button>
            </div>
          </div>

          <div className="terminal-panel">
            <div className="terminal-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">myapp/frontend • dev server</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line">$ npm run dev</div>
              <div className="terminal-line terminal-line-success">
                VITE v5.4.21  ready in 221 ms
              </div>
              <div className="terminal-line">➜  Local:   http://localhost:5173/</div>
              <div className="terminal-line">➜  Stack:  react • express • mongo</div>
              <div className="terminal-line terminal-line-dim">
                tip: edit <span className="code-inline">src/App.jsx</span> and save to reload.
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <StatCard label="Frontend" value="React + Vite" accent="green" />
          <StatCard label="Cold start" value="~200 ms" accent="blue" />
          <StatCard label="Ready to ship" value="Out of the box" accent="purple" />
        </section>
      </main>

      <footer className="app-footer">
        <span>Generated with Setup CLI • React template</span>
        <span className="footer-hint">Start editing src/App.jsx to make it yours.</span>
      </footer>
    </div>
  );
}

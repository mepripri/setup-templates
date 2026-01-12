import config from "../setup.config.json";
import StatCard from "./components/StatCard.jsx";

export default function App() {
  const { frontend, backend, database } = config;

  const isFrontendOnly = frontend && !backend && !database;
  const isFrontendBackend = frontend && backend && !database;
  const isFullStack = frontend && backend && database;

  return (
    <div className="app-root">
      <div className="glow-bg" />

      <header className="app-header">
        <div className="logo-mark">{">_"} setup</div>
        <div className="header-pill">
          {isFrontendOnly && "Frontend only"}
          {isFrontendBackend && "Frontend + Backend"}
          {isFullStack && "Full Stack"}
        </div>
      </header>

      <main className="app-main">
        <section className="hero">
          <div>
            <h1 className="hero-title">
              {isFrontendOnly && (
                <>
                  Your <span className="hero-title-accent">{frontend}</span> app is ready.
                </>
              )}

              {isFrontendBackend && (
                <>
                  Your <span className="hero-title-accent">{frontend}</span> +{" "}
                  <span className="hero-title-accent">{backend}</span> project is live.
                </>
              )}

              {isFullStack && (
                <>
                  Your full stack is ready to build.
                </>
              )}
            </h1>

            <p className="hero-subtitle">
              Generated using <span className="accent">Setup CLI</span>.  
              Edit components, wire APIs, and start building instantly.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">
                Start editing src/App.jsx
              </button>
              <button className="ghost-btn">View project structure</button>
            </div>
          </div>

          <div className="terminal-panel">
            <div className="terminal-header">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="terminal-title">dev server</span>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">$ npm run dev</div>
              <div className="terminal-line terminal-line-success">
                VITE ready on http://localhost:5173
              </div>

              {isFrontendOnly && (
                <div className="terminal-line">Frontend: {frontend}</div>
              )}

              {isFrontendBackend && (
                <>
                  <div className="terminal-line">Frontend: {frontend}</div>
                  <div className="terminal-line">Backend: {backend}</div>
                </>
              )}

              {isFullStack && (
                <>
                  <div className="terminal-line">Frontend: {frontend}</div>
                  <div className="terminal-line">Backend: {backend}</div>
                  <div className="terminal-line">Database: {database}</div>
                </>
              )}

              <div className="terminal-line terminal-line-dim">
                tip: edit <span className="code-inline">src/App.jsx</span> to customize UI
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          <StatCard label="Frontend" value={frontend} accent="green" />

          {backend && (
            <StatCard label="Backend" value={backend} accent="blue" />
          )}

          {database && (
            <StatCard label="Database" value={database} accent="purple" />
          )}
        </section>
      </main>

      <footer className="app-footer">
        <span>Generated with Setup CLI</span>
        <span className="footer-hint">Start editing to make it yours.</span>
      </footer>
    </div>
  );
}

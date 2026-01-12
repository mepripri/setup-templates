import config from "../setup.config.json";
import StatCard from "./components/StatCard.jsx";

export default function App() {
  const { frontend, backend, database } = config;

  const stackItems = [
    { label: "Frontend", value: frontend, accent: "green" },
    { label: "Backend", value: backend, accent: "blue" },
    { label: "Database", value: database, accent: "purple" }
  ].filter(item => item.value);

  const stackCount = stackItems.length;

  const headerLabel =
    stackCount === 1 ? "Frontend only" :
    stackCount === 2 ? "Frontend + Backend" :
    stackCount === 3 ? "Full Stack" :
    "Setup CLI";

  const heroTitle =
    stackCount === 1
      ? `Your ${frontend} app is ready.`
      : stackCount === 2
      ? `Your ${frontend} + ${backend} project is live.`
      : `Your full stack is ready to build.`;

  return (
    <div className="app-root">
      <div className="glow-bg" />

      <header className="app-header">
        <div className="logo-mark">{">_"} setup</div>
        <div className="header-pill">{headerLabel}</div>
      </header>

      <main className="app-main">
        <section className="hero">
          <div>
            <h1 className="hero-title">{heroTitle}</h1>

            <p className="hero-subtitle">
              Generated using <span className="accent">Setup CLI</span>.  
              Edit components, wire APIs, and start building instantly.
            </p>

            <div className="hero-actions">
              <button className="primary-btn">Start editing src/App.jsx</button>
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

              {frontend && (
                <div className="terminal-line">Frontend: {frontend}</div>
              )}

              {backend && (
                <div className="terminal-line">Backend: {backend}</div>
              )}

              {database && (
                <div className="terminal-line">Database: {database}</div>
              )}

              <div className="terminal-line terminal-line-dim">
                tip: edit <span className="code-inline">src/App.jsx</span> to customize UI
              </div>
            </div>
          </div>
        </section>

        <section className="stats-grid">
          {stackItems.map((item, i) => (
            <StatCard key={i} label={item.label} value={item.value} accent={item.accent} />
          ))}
        </section>
      </main>

      <footer className="app-footer">
        <span>Generated with Setup CLI</span>
        <span className="footer-hint">Start editing to make it yours.</span>
      </footer>
    </div>
  );
}

import Button from "./components/Button";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to React + Setup CLI</h1>
      <p className="text-gray-600 mb-6 max-w-xl">
        This project was generated using the Setup CLI. Edit components, add pages,
        and start building your app instantly.
      </p>

      <Button>Get Started</Button>

      <footer className="mt-10 text-gray-400 text-sm">
        Built with ❤️ using Setup CLI
      </footer>
    </div>
  );
}

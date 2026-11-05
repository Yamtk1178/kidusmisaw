import Link from "next/link";
import { Terminal, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center font-mono">
      <div className="flex h-12 w-12 items-center justify-center border border-electric bg-electric/10 text-electric mb-4 shadow-[0_0_20px_rgba(0,255,102,0.3)]">
        <Terminal className="h-6 w-6" />
      </div>

      <div className="mono-tag text-xs text-electric mb-2">
        ERROR 404 // ROUTE UNMAPPED
      </div>

      <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase text-mono-100 tracking-tight">
        NODE NOT FOUND
      </h1>

      <p className="mt-4 text-xs text-mono-400 max-w-sm">
        The system address you attempted to access does not exist or has been relocated.
      </p>

      <Link
        href="/"
        className="mt-8 flex items-center space-x-2 border border-mono-100 bg-mono-100 px-6 py-3 text-xs font-bold text-monodark hover:bg-electric hover:border-electric transition-all uppercase"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>RETURN TO BASE (HOME)</span>
      </Link>
    </div>
  );
}


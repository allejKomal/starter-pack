import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 grid grid-rows-[auto_1fr_auto] gap-16 font-sans">
      <header className="flex justify-between items-center">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ModeToggle />
      </header>

      <main className="flex flex-col gap-8 items-start">
        <h1 className="text-2xl font-bold tracking-tight">Starter Pack</h1>
        <p className="text-base text-muted-foreground max-w-prose">
          Minimal Next.js + Tailwind + shadcn/ui setup. Fast start. No clutter.
        </p>

        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li>Edit <code className="bg-muted px-1 py-0.5 rounded">app/page.tsx</code> to begin.</li>
          <li>shadcn/ui integrated with Tailwind presets.</li>
          <li>Dark mode and responsive layout ready.</li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
            href="/docs"
          >
            View Docs
          </a>
          <a
            className="border border-input hover:bg-accent hover:text-accent-foreground rounded-md px-4 py-2 text-sm font-medium"
            href="/components"
          >
            Browse Components
          </a>
        </div>
      </main>

      <footer className="text-xs text-muted-foreground text-center">
        Built with Next.js, Tailwind, shadcn/ui.
      </footer>
    </div>
  );
}

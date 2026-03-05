import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-courier text-[10px] uppercase tracking-label text-ash">
        404 · identity not found
      </p>
      <h1 className="mt-4 font-cormorant text-2xl font-light italic text-ink">
        this page has not been archived.
      </h1>
      <p className="mt-6 max-w-md font-jost text-sm font-light text-ash">
        open the homepage to enter the archive. If every page is 404, run the dev server from the project folder: <code className="bg-dust/30 px-1">cd scentarchive && npm run dev</code>, then open the URL the terminal shows.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-ink px-8 py-3 font-jost text-sm font-light text-ink transition-all duration-500 hover:bg-ink hover:text-cream"
      >
        go to homepage →
      </Link>
    </div>
  );
}

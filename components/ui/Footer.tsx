import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dust bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-courier text-xs font-normal uppercase tracking-nav text-ink"
            >
              Maison Margiela Replica: ÉTAT
            </Link>
            <p className="mt-2 font-courier text-[10px] uppercase tracking-label text-ash">
              Your State. Your Scent.
            </p>
            <p className="mt-4 font-jost text-sm font-light leading-relaxed text-ash">
              every bottle carries a serial number. every serial number carries a life.
            </p>
          </div>
          <div>
            <p className="font-courier text-[10px] uppercase tracking-label text-ash">
              explore
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/discover" className="font-jost text-sm font-light text-ink hover:text-ash">
                  discover
                </Link>
              </li>
              <li>
                <Link href="/collection" className="font-jost text-sm font-light text-ink hover:text-ash">
                  collection
                </Link>
              </li>
              <li>
                <Link href="/atelier" className="font-jost text-sm font-light text-ink hover:text-ash">
                  atelier
                </Link>
              </li>
              <li>
                <Link href="/story" className="font-jost text-sm font-light text-ink hover:text-ash">
                  story
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-courier text-[10px] uppercase tracking-label text-ash">
              support
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="font-jost text-sm font-light text-ink hover:text-ash">
                  contact
                </Link>
              </li>
              <li>
                <Link href="#" className="font-jost text-sm font-light text-ink hover:text-ash">
                  shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="font-jost text-sm font-light text-ink hover:text-ash">
                  returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-courier text-[10px] uppercase tracking-label text-ash">
              legal
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="#" className="font-jost text-sm font-light text-ink hover:text-ash">
                  privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="font-jost text-sm font-light text-ink hover:text-ash">
                  terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-dust pt-8">
          <p className="font-courier text-[10px] uppercase tracking-label text-ash">
            © MAISON MARGIELA REPLICA: ÉTAT · ALL IDENTITIES ARCHIVED
          </p>
        </div>
      </div>
    </footer>
  );
}

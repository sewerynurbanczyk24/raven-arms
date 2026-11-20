export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}

        <div className="flex items-center gap-4">

          <img
            src="/branding/raven-logo.png"
            alt="Raven Arms Logo"
            className="w-14 h-14 object-contain"
          />

          <img
            src="/branding/raven-wordmark.png"
            alt="Raven Arms"
            className="h-10 w-auto"
          />

        </div>

        {/* MENU */}

        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#"
            className="text-sm uppercase tracking-[2px] text-white hover:text-red-600 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-[2px] text-white hover:text-red-600 transition"
          >
            Products
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-[2px] text-white hover:text-red-600 transition"
          >
            Platforms
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-[2px] text-white hover:text-red-600 transition"
          >
            Gallery
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-[2px] text-white hover:text-red-600 transition"
          >
            Dealers
          </a>

          <a
            href="#"
            className="text-sm uppercase tracking-[2px] text-white hover:text-red-600 transition"
          >
            Contact
          </a>

        </nav>

        {/* PRAWA STRONA */}

        <div className="hidden lg:flex items-center gap-5">

          <button className="text-zinc-500 hover:text-white transition text-lg">
            🔍
          </button>

          <div className="border-l border-zinc-800 h-6"></div>

          <div className="flex items-center gap-2">

            <span className="text-zinc-500">
              🌍
            </span>

            <button
              className="
                px-3
                py-1
                bg-red-700
                rounded-md
                text-xs
                font-semibold
                text-white
              "
            >
              PL
            </button>

            <button
              className="
                px-3
                py-1
                border
                border-zinc-700
                rounded-md
                text-xs
                font-semibold
                text-zinc-400
                hover:text-white
                hover:border-zinc-500
                transition
              "
            >
              EN
            </button>

          </div>

        </div>

      </div>
    </header>
  );
}
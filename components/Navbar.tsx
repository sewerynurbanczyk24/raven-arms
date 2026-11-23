export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/80
        backdrop-blur-md
        border-b
        border-zinc-900
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* LOGO */}

        <a
          href="#home"
          className="flex items-center gap-4"
        >
          <img
            src="/branding/raven-logo.png"
            alt="Raven Arms Logo"
            className="w-16 h-16 object-contain"
          />

          <img
            src="/branding/raven-wordmark.png"
            alt="Raven Arms"
            className="h-12 w-auto"
          />
        </a>

        {/* MENU */}

        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#products"
            className="
              text-sm
              uppercase
              tracking-[2px]
              text-white
              hover:text-red-600
              transition
            "
          >
            Produkty
          </a>

          <a
            href="#platforms"
            className="
              text-sm
              uppercase
              tracking-[2px]
              text-white
              hover:text-red-600
              transition
            "
          >
            Platformy
          </a>

          <a
            href="#gallery"
            className="
              text-sm
              uppercase
              tracking-[2px]
              text-white
              hover:text-red-600
              transition
            "
          >
            Galeria
          </a>

          <a
            href="#dealers"
            className="
              text-sm
              uppercase
              tracking-[2px]
              text-white
              hover:text-red-600
              transition
            "
          >
            Partnerzy
          </a>

          <a
            href="#contact"
            className="
              text-sm
              uppercase
              tracking-[2px]
              text-white
              hover:text-red-600
              transition
            "
          >
            Kontakt
          </a>

        </nav>

        {/* PRAWA STRONA */}

        <div className="hidden lg:flex items-center gap-5">

          <div className="border-l border-zinc-800 h-6" />

          {/* JĘZYKI */}

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

          {/* CTA */}

          <a
            href="#contact"
            className="
              ml-3
              bg-red-700
              hover:bg-red-600
              transition
              px-5
              py-3
              uppercase
              tracking-wider
              text-xs
              font-black
            "
          >
            Kontakt
          </a>

        </div>

      </div>
    </header>
  );
}
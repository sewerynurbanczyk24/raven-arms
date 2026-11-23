export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-[40%_20%_20%_20%] gap-12">

          {/* MARKA */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src="/branding/raven-logo.png"
                alt="Raven Arms"
                className="w-14 h-14 object-contain"
              />

              <img
                src="/branding/raven-wordmark.png"
                alt="Raven Arms"
                className="h-10 w-auto"
              />

            </div>

            <p className="mt-8 text-zinc-400 leading-relaxed max-w-md">
              Komponenty CNC klasy premium do platform AR15,
              PCC, pistoletów sportowych oraz strzelb.
              Projektowane i produkowane w Polsce dla
              najbardziej wymagających strzelców.
            </p>

            <div className="mt-8 text-zinc-500 text-sm">
              Precision Engineered.
            </div>

          </div>

          {/* NAWIGACJA */}

          <div>

            <h3 className="text-white font-black uppercase tracking-wider">
              Nawigacja
            </h3>

            <div className="mt-6 flex flex-col gap-3">

              <a
                href="#products"
                className="text-zinc-500 hover:text-white transition"
              >
                Produkty
              </a>

              <a
                href="#platforms"
                className="text-zinc-500 hover:text-white transition"
              >
                Platformy
              </a>

              <a
                href="#gallery"
                className="text-zinc-500 hover:text-white transition"
              >
                Galeria
              </a>

              <a
                href="#dealers"
                className="text-zinc-500 hover:text-white transition"
              >
                Partnerzy
              </a>

            </div>

          </div>

          {/* KONTAKT */}

          <div>

            <h3 className="text-white font-black uppercase tracking-wider">
              Kontakt
            </h3>

            <div className="mt-6 space-y-4">

              <p className="text-zinc-500">
                kontakt@raven-arms.pl
              </p>

              <p className="text-zinc-500">
                +48 509 692 864
              </p>

              <p className="text-zinc-500">
                Młoszowa, Polska
              </p>

            </div>

          </div>

          {/* FIRMA */}

          <div>

            <h3 className="text-white font-black uppercase tracking-wider">
              Raven Arms
            </h3>

            <div className="mt-6 space-y-3">

              <p className="text-zinc-500">
                Projektowanie CNC
              </p>

              <p className="text-zinc-500">
                Produkcja OEM
              </p>

              <p className="text-zinc-500">
                Dystrybucja międzynarodowa
              </p>

              <p className="text-zinc-500">
                Współpraca dealerska
              </p>

            </div>

          </div>

        </div>

        {/* DOLNA BELKA */}

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-zinc-600 text-sm">
            © 2026 Raven Arms. Wszelkie prawa zastrzeżone.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="text-zinc-600 hover:text-white transition"
            >
              Polityka prywatności
            </a>

            <a
              href="#"
              className="text-zinc-600 hover:text-white transition"
            >
              Kontakt
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
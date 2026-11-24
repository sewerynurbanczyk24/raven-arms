export default function RA03Page() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="relative border-b border-zinc-900 overflow-hidden">

        <div className="absolute inset-0 bg-red-700/10 blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <p className="text-red-600 uppercase tracking-[4px] text-sm">
            Raven Arms Product Series
          </p>

          <h1 className="mt-6 text-6xl lg:text-8xl font-black uppercase">
            RA-03
          </h1>

          <h2 className="mt-4 text-3xl lg:text-4xl text-zinc-300 uppercase">
            Extended Magazine Release
          </h2>

          <p className="mt-8 text-zinc-500 uppercase tracking-[4px]">
            Faster. Easier. Better.
          </p>

          <div className="mt-16">
            <img
              src="/products/ra03-mag-release.png"
              alt="RA-03 Extended Magazine Release"
              className="
                w-full
                max-w-5xl
                mx-auto
                drop-shadow-[0_0_60px_rgba(220,38,38,0.35)]
              "
            />
          </div>

          {/* KOLORY */}

          <div className="mt-16 text-center">

            <p className="uppercase tracking-[3px] text-sm text-zinc-500 mb-6">
              Dostępne warianty kolorystyczne
            </p>

            <div className="flex justify-center gap-5">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-black
                  border-2
                  border-white
                "
              />

              <div className="w-10 h-10 rounded-full bg-red-700" />

              <div className="w-10 h-10 rounded-full bg-blue-600" />

              <div className="w-10 h-10 rounded-full bg-green-600" />

              <div className="w-10 h-10 rounded-full bg-yellow-500" />

            </div>

          </div>

        </div>

      </section>

      {/* OPIS */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <p className="uppercase tracking-[4px] text-red-600 text-sm">
                Zaprojektowany dla szybkości
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase">
                Błyskawiczna wymiana magazynka
              </h2>

            </div>

            <div>

              <p className="text-zinc-400 leading-relaxed text-lg">
                RA‑03 Extended Magazine Release został opracowany
                z myślą o strzelcach, którzy oczekują szybkiej,
                intuicyjnej oraz pewnej obsługi magazynka podczas
                treningów i zawodów.
              </p>

              <p className="mt-8 text-zinc-500 leading-relaxed">
                Powiększona powierzchnia przycisku poprawia ergonomię,
                przyspiesza zmianę magazynka i pozwala zachować pełną
                kontrolę nad bronią nawet podczas dynamicznych konkurencji.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PLATFORMY */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Platformy Raven Arms
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase">
            Tworzone dla najpopularniejszych platform
          </h2>

          <p className="mt-6 text-zinc-500 max-w-3xl leading-relaxed">
            Komponenty Raven Arms projektowane są z myślą o
            najpopularniejszych platformach wykorzystywanych
            w strzelectwie sportowym, dynamicznym oraz rekreacyjnym.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">

            <div className="border border-zinc-800 p-8 text-center">
              <h3 className="font-black text-xl">
                Beretta 92X
              </h3>

              <p className="mt-3 text-zinc-500 text-sm">
                Pistolety sportowe
              </p>
            </div>

            <div className="border border-zinc-800 p-8 text-center">
              <h3 className="font-black text-xl">
                CZ Shadow 2
              </h3>

              <p className="mt-3 text-zinc-500 text-sm">
                IPSC & Dynamic Shooting
              </p>
            </div>

            <div className="border border-zinc-800 p-8 text-center">
              <h3 className="font-black text-xl">
                Walther PDP
              </h3>

              <p className="mt-3 text-zinc-500 text-sm">
                Performance Pistols
              </p>
            </div>

            <div className="border border-zinc-800 p-8 text-center">
              <h3 className="font-black text-xl">
                Huglu Mohac
              </h3>

              <p className="mt-3 text-zinc-500 text-sm">
                Sport & Tactical Shotguns
              </p>
            </div>

            <div className="border border-zinc-800 p-8 text-center">
              <h3 className="font-black text-xl">
                FB GROT
              </h3>

              <p className="mt-3 text-zinc-500 text-sm">
                Modern Rifle Platform
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CECHY */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="border border-zinc-800 p-8">

              <div className="text-red-600 text-3xl font-black">
                FAST
              </div>

              <div className="mt-3 text-zinc-300 font-semibold">
                Szybsza wymiana magazynka
              </div>

              <div className="mt-4 text-zinc-500 text-sm">
                Lepsza ergonomia podczas dynamicznego strzelania.
              </div>

            </div>

            <div className="border border-zinc-800 p-8">

              <div className="text-red-600 text-3xl font-black">
                CNC
              </div>

              <div className="mt-3 text-zinc-300 font-semibold">
                Precision Machined
              </div>

              <div className="mt-4 text-zinc-500 text-sm">
                Dokładna obróbka każdego detalu.
              </div>

            </div>

            <div className="border border-zinc-800 p-8">

              <div className="text-red-600 text-3xl font-black">
                SPORT
              </div>

              <div className="mt-3 text-zinc-300 font-semibold">
                Competition Ready
              </div>

              <div className="mt-4 text-zinc-500 text-sm">
                Opracowany dla strzelectwa sportowego.
              </div>

            </div>

            <div className="border border-zinc-800 p-8">

              <div className="text-red-600 text-3xl font-black">
                PL
              </div>

              <div className="mt-3 text-zinc-300 font-semibold">
                Made In Poland
              </div>

              <div className="mt-4 text-zinc-500 text-sm">
                Projektowane i produkowane w Polsce.
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SPECYFIKACJA */}

      <section className="border-b border-zinc-900">

        <div className="max-w-4xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Specyfikacja
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase">
            Dane techniczne
          </h2>

          <div className="mt-12 space-y-6">

            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-zinc-500">Przeznaczenie</span>
              <span>Pistolety i karabinki sportowe</span>
            </div>

            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-zinc-500">Produkcja</span>
              <span>CNC Machined</span>
            </div>

            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-zinc-500">Wykończenie</span>
              <span>Hard Anodized</span>
            </div>

            <div className="flex justify-between border-b border-zinc-900 pb-4">
              <span className="text-zinc-500">Pochodzenie</span>
              <span>Polska</span>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section>

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h2 className="text-4xl lg:text-6xl font-black uppercase">
            Poznaj kolejne produkty
          </h2>

          <p className="mt-6 text-zinc-500">
            Odkryj pełną serię komponentów Raven Arms.
          </p>

          <a
            href="/#products"
            className="
              inline-block
              mt-10
              bg-red-700
              hover:bg-red-600
              transition
              px-10
              py-5
              uppercase
              font-black
              tracking-wider
            "
          >
            Wróć do produktów →
          </a>

        </div>

      </section>

    </main>
  );
}
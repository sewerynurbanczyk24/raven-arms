export default function FeaturedProduct() {
  return (
    <section className="border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[4px] text-red-600 text-sm">
          Featured Product
        </p>

        <h2 className="mt-4 text-5xl lg:text-7xl font-black uppercase">
          Raven Charging Handle
        </h2>

        <p className="mt-4 text-zinc-500 uppercase tracking-[4px]">
          Control. Speed. Advantage.
        </p>

        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center mt-16">

          {/* LEWA STRONA */}
          <div>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Lekka, wytrzymała i zaprojektowana z myślą o
              maksymalnej ergonomii. Raven Charging Handle to
              połączenie precyzyjnej obróbki CNC oraz
              nowoczesnego wzornictwa stworzonego dla
              wymagających strzelców sportowych.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-12">

              <div className="border border-zinc-800 p-5">
                <div className="text-red-600 font-black">
                  7075-T6
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Aluminium
                </div>
              </div>

              <div className="border border-zinc-800 p-5">
                <div className="text-red-600 font-black">
                  CNC
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Machined
                </div>
              </div>

              <div className="border border-zinc-800 p-5">
                <div className="text-red-600 font-black">
                  HARD
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Anodized
                </div>
              </div>

              <div className="border border-zinc-800 p-5">
                <div className="text-red-600 font-black">
                  READY
                </div>

                <div className="text-zinc-500 text-sm uppercase mt-2">
                  Competition Use
                </div>
              </div>

            </div>

            <a
              href="/products/ra-01"
              className="
                inline-flex
                items-center
                gap-3
                mt-10
                bg-red-700
                hover:bg-red-600
                px-8
                py-4
                uppercase
                font-bold
                tracking-wider
                transition
              "
            >
              Dowiedz się więcej →
            </a>

          </div>

          {/* PRAWA STRONA */}
          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-red-700/10
                blur-[120px]
              "
            />

            <img
              src="/products/ra01-charging-handle.png"
              alt="RA-01 Charging Handle"
              className="
                relative
                z-10
                w-full
                hover:scale-[1.02]
                transition
                duration-500
                drop-shadow-[0_0_60px_rgba(220,38,38,0.4)]
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                border-l-2
                border-red-600
                pl-4
              "
            >
              <div className="text-zinc-500 text-sm uppercase tracking-[4px]">
                RA-01
              </div>

              <div className="text-xl font-black uppercase">
                Charging Handle
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
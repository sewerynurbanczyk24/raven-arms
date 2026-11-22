export default function FeaturedProduct() {
  return (
    <section className="border-t border-zinc-900 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-12">

          <p className="uppercase tracking-[4px] text-red-600 text-sm mb-4">
            Featured Product
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            RA-01 CHARGING HANDLE
          </h2>

          <p className="mt-4 text-zinc-500 uppercase tracking-[3px]">
            Control. Reliability. Performance.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEWA STRONA */}

          <div>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Zaprojektowana z myślą o maksymalnej ergonomii,
              szybkości obsługi oraz bezkompromisowej jakości.
              RA-01 to koncepcyjna dźwignia przeładowania wykonana
              z aluminium lotniczego 7075-T6.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="border border-zinc-800 rounded-xl p-6">
                <div className="text-red-600 font-bold text-xl">
                  7075-T6
                </div>

                <div className="text-zinc-500 text-sm mt-2">
                  Aluminium
                </div>
              </div>

              <div className="border border-zinc-800 rounded-xl p-6">
                <div className="text-red-600 font-bold text-xl">
                  CNC
                </div>

                <div className="text-zinc-500 text-sm mt-2">
                  Machined
                </div>
              </div>

              <div className="border border-zinc-800 rounded-xl p-6">
                <div className="text-red-600 font-bold text-xl">
                  HARD
                </div>

                <div className="text-zinc-500 text-sm mt-2">
                  Anodized
                </div>
              </div>

              <div className="border border-zinc-800 rounded-xl p-6">
                <div className="text-red-600 font-bold text-xl">
                  PL
                </div>

                <div className="text-zinc-500 text-sm mt-2">
                  Made In Poland
                </div>
              </div>

            </div>

            <a
              href="/products/ra-01"
              className="
                inline-block
                mt-12
                bg-red-700
                hover:bg-red-600
                transition
                px-8
                py-4
                rounded-xl
                font-semibold
              "
            >
              View Product
            </a>

          </div>

          {/* PRAWA STRONA */}

          <div>

            <a href="/products/ra-01">

              <img
                src="/products/ra01-charging-handle.png"
                alt="RA-01 Charging Handle"
                className="
                  rounded-3xl
                  border
                  border-zinc-800
                  shadow-2xl
                  hover:scale-[1.02]
                  transition
                  duration-300
                "
              />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
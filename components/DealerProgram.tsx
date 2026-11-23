export default function DealerProgram() {
  return (
    <section
  id="dealers"
  className="border-t border-zinc-900 bg-zinc-950 overflow-hidden"
>
      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-[60%_40%] gap-20 items-center">

          {/* LEWA STRONA */}

          <div>

            <p className="uppercase tracking-[4px] text-red-600 text-sm">
              Program Partnerski
            </p>

            <h2 className="mt-4 text-5xl lg:text-7xl font-black uppercase">
              ZOSTAŃ
              <br />
              PARTNEREM
              <br />
              RAVEN ARMS
            </h2>

            <p className="mt-10 text-xl text-zinc-300 leading-relaxed">
              Dołącz do sieci partnerów oferujących wysokiej klasy
              komponenty CNC do platform AR15, PCC, pistoletów
              sportowych oraz strzelb.
            </p>

            <p className="mt-6 text-zinc-500 leading-relaxed">
              Poszukujemy dystrybutorów, wyspecjalizowanych sklepów
              oraz partnerów handlowych zainteresowanych rozwojem
              marki Raven Arms na rynkach krajowych i zagranicznych.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 uppercase">
                  Hurt
                </h3>

                <p className="mt-3 text-zinc-500">
                  Atrakcyjne warunki współpracy dla sklepów
                  i dystrybutorów.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 uppercase">
                  Eksport
                </h3>

                <p className="mt-3 text-zinc-500">
                  Rozwój międzynarodowej sieci sprzedaży
                  i partnerstw handlowych.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 uppercase">
                  OEM
                </h3>

                <p className="mt-3 text-zinc-500">
                  Produkcja komponentów CNC dla innych marek
                  i projektów komercyjnych.
                </p>
              </div>

              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 uppercase">
                  Projekty Indywidualne
                </h3>

                <p className="mt-3 text-zinc-500">
                  Dedykowane rozwiązania oraz limitowane serie
                  produktów.
                </p>
              </div>

            </div>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-12
                bg-red-700
                hover:bg-red-600
                px-10
                py-5
                uppercase
                tracking-wider
                font-black
                transition
              "
            >
              Nawiąż współpracę →
            </a>

          </div>

          {/* PRAWA STRONA */}

          <div className="relative">

            <div
              className="
                absolute
                inset-0
                bg-red-700/20
                blur-[160px]
              "
            />

            <div
              className="
                relative
                z-10
                border
                border-zinc-800
                bg-black/60
                backdrop-blur
                p-10
              "
            >
              <div className="space-y-10">

                <div>
                  <div className="text-red-600 text-4xl font-black">
                    Rynki Międzynarodowe
                  </div>

                  <div className="text-zinc-500 uppercase text-sm mt-2">
                    Sieć Dystrybucji
                  </div>
                </div>

                <div>
                  <div className="text-red-600 text-4xl font-black">
                    OEM
                  </div>

                  <div className="text-zinc-500 uppercase text-sm mt-2">
                    Możliwości Produkcyjne
                  </div>
                </div>

                <div>
                  <div className="text-red-600 text-4xl font-black">
                    CNC
                  </div>

                  <div className="text-zinc-500 uppercase text-sm mt-2">
                    Precyzyjna Obróbka
                  </div>
                </div>

                <div>
                  <div className="text-red-600 text-4xl font-black">
                    PL
                  </div>

                  <div className="text-zinc-500 uppercase text-sm mt-2">
                    Projektowane i Produkowane w Polsce
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
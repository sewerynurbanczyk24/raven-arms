export default function DealerPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-32">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Raven Arms Dealer Program
          </p>

          <h1 className="mt-6 text-6xl lg:text-8xl font-black uppercase">
            Zostań
            <br />
            Partnerem
            <br />
            Raven Arms
          </h1>

          <p className="mt-10 text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Poszukujemy partnerów handlowych, sklepów strzeleckich,
            dystrybutorów oraz firm zainteresowanych rozwojem
            marki Raven Arms na rynku krajowym i międzynarodowym.
          </p>

        </div>

      </section>

      {/* KORZYŚCI */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <h2 className="text-5xl font-black uppercase">
            Dlaczego Raven Arms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                PREMIUM
              </div>

              <p className="mt-4 text-zinc-500">
                Komponenty CNC klasy premium dla wymagających użytkowników.
              </p>
            </div>

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                OEM
              </div>

              <p className="mt-4 text-zinc-500">
                Możliwość realizacji projektów dla partnerów biznesowych.
              </p>
            </div>

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                CNC
              </div>

              <p className="mt-4 text-zinc-500">
                Własne projekty oraz precyzyjna produkcja komponentów.
              </p>
            </div>

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                EXPORT
              </div>

              <p className="mt-4 text-zinc-500">
                Rozwój sieci sprzedaży na rynkach międzynarodowych.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FORMULARZ */}

      <section>

        <div className="max-w-4xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Formularz Dealerski
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase">
            Nawiąż współpracę
          </h2>

          <p className="mt-6 text-zinc-500">
            Wypełnij formularz, a skontaktujemy się z Tobą
            w sprawie współpracy handlowej.
          </p>

          <form className="grid gap-6 mt-12">

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Nazwa firmy"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Kraj"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            />

            <input
              type="email"
              placeholder="Adres e-mail"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            />

            <input
              type="text"
              placeholder="Strona internetowa"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            />

            <select
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                focus:border-red-600
                outline-none
              "
            >
              <option>Typ działalności</option>
              <option>Sklep strzelecki</option>
              <option>Dystrybutor</option>
              <option>Producent OEM</option>
              <option>Strzelnica</option>
              <option>Inne</option>
            </select>

            <textarea
              rows={6}
              placeholder="Opisz swoją działalność oraz zakres możliwej współpracy"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                resize-none
                focus:border-red-600
                outline-none
              "
            />

            <button
              type="submit"
              className="
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
              Wyślij zgłoszenie
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}
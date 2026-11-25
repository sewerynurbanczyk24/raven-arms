export default function DealerPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

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
            Poszukujemy sklepów strzeleckich, dystrybutorów,
            partnerów handlowych oraz firm zainteresowanych
            rozwojem marki Raven Arms na rynku krajowym
            i międzynarodowym.
          </p>

        </div>

      </section>

      {/* KORZYŚCI */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Korzyści współpracy
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase">
            Dlaczego Raven Arms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                PREMIUM
              </div>

              <p className="mt-4 text-zinc-500">
                Produkty zaprojektowane dla najbardziej wymagających użytkowników.
              </p>
            </div>

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                OEM
              </div>

              <p className="mt-4 text-zinc-500">
                Możliwość współpracy przy projektach oraz produkcji OEM.
              </p>
            </div>

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                CNC
              </div>

              <p className="mt-4 text-zinc-500">
                Precyzyjna produkcja komponentów w technologii CNC.
              </p>
            </div>

            <div className="border border-zinc-800 p-8">
              <div className="text-red-600 text-2xl font-black">
                EXPORT
              </div>

              <p className="mt-4 text-zinc-500">
                Rozwijamy sieć partnerów na rynkach międzynarodowych.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* JAK TO DZIAŁA */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Proces współpracy
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase">
            Trzy proste kroki
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div>
              <div className="text-red-600 text-4xl font-black">
                01
              </div>

              <h3 className="mt-4 text-xl font-black uppercase">
                Formularz
              </h3>

              <p className="mt-4 text-zinc-500">
                Wypełnij formularz dealerski oraz przedstaw swoją działalność.
              </p>
            </div>

            <div>
              <div className="text-red-600 text-4xl font-black">
                02
              </div>

              <h3 className="mt-4 text-xl font-black uppercase">
                Kontakt
              </h3>

              <p className="mt-4 text-zinc-500">
                Analizujemy zgłoszenie i kontaktujemy się z partnerem.
              </p>
            </div>

            <div>
              <div className="text-red-600 text-4xl font-black">
                03
              </div>

              <h3 className="mt-4 text-xl font-black uppercase">
                Współpraca
              </h3>

              <p className="mt-4 text-zinc-500">
                Ustalamy warunki współpracy i rozwijamy sprzedaż produktów.
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
            Pozostaw dane kontaktowe, a wrócimy do Ciebie
            z propozycją współpracy.
          </p>

          <form className="grid gap-6 mt-12">

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Nazwa firmy"
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Kraj"
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
            />

            <input
              type="email"
              placeholder="Adres e-mail"
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Strona internetowa"
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
            />

            <select
              className="bg-black border border-zinc-800 px-5 py-4 outline-none focus:border-red-600"
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
              className="bg-black border border-zinc-800 px-5 py-4 resize-none outline-none focus:border-red-600"
            />

            <button
              type="submit"
              className="
                bg-red-700
                hover:bg-red-600
                transition
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
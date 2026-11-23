export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-900 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-32">

        {/* NAGŁÓWEK */}

        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-[4px] text-red-600 text-sm">
            Kontakt
          </p>

          <h2 className="mt-4 text-5xl lg:text-7xl font-black uppercase">
            POROZMAWIAJMY
          </h2>

          <p className="mt-8 text-xl text-zinc-400 leading-relaxed">
            Masz pytania dotyczące produktów, współpracy handlowej,
            dystrybucji lub produkcji OEM? Skontaktuj się z nami.
          </p>

        </div>

        {/* KARTY KONTAKTOWE */}

        <div className="grid lg:grid-cols-3 gap-6 mt-20">

          <div className="border border-zinc-800 p-8">
            <h3 className="text-red-600 font-black uppercase">
              E-mail
            </h3>

            <p className="mt-4 text-xl break-all">
              kontakt@raven-arms.pl
            </p>

            <p className="mt-4 text-zinc-500">
              Odpowiadamy na pytania dotyczące produktów,
              współpracy handlowej oraz wsparcia technicznego.
            </p>
          </div>

          <div className="border border-zinc-800 p-8">
            <h3 className="text-red-600 font-black uppercase">
              Telefon
            </h3>

            <p className="mt-4 text-xl">
              +48 509 692 864
            </p>

            <p className="mt-4 text-zinc-500">
              Skontaktuj się bezpośrednio w sprawie współpracy,
              produktów lub zamówień.
            </p>
          </div>

          <div className="border border-zinc-800 p-8">
            <h3 className="text-red-600 font-black uppercase">
              Lokalizacja
            </h3>

            <p className="mt-4 text-xl">
              Młoszowa, Polska
            </p>

            <p className="mt-4 text-zinc-500">
              Projektowane i produkowane w Polsce.
            </p>
          </div>

        </div>

        {/* FORMULARZ */}

        <div className="mt-20 border border-zinc-800 bg-zinc-950/50 p-10 lg:p-14">

          <h3 className="text-3xl font-black uppercase">
            Wyślij wiadomość
          </h3>

          <p className="mt-4 text-zinc-500">
            Wypełnij formularz, a skontaktujemy się z Tobą
            tak szybko, jak to możliwe.
          </p>

          <form className="grid gap-6 mt-10">

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                outline-none
                focus:border-red-600
                transition
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
                outline-none
                focus:border-red-600
                transition
              "
            />

            <input
              type="text"
              placeholder="Temat wiadomości"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                outline-none
                focus:border-red-600
                transition
              "
            />

            <textarea
              rows={6}
              placeholder="Treść wiadomości"
              className="
                bg-black
                border
                border-zinc-800
                px-5
                py-4
                resize-none
                outline-none
                focus:border-red-600
                transition
              "
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
              Wyślij wiadomość
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
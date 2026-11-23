export default function Platforms() {
  const items = [
    {
      title: "AR15",
      subtitle: "Parts & Accessories",
      image: "/platforms/ar15.jpg",
    },
    {
      title: "PCC",
      subtitle: "Competition Components",
      image: "/platforms/pcc.jpg",
    },
    {
      title: "PISTOLS",
      subtitle: "Performance Upgrades",
      image: "/platforms/pistol.jpg",
    },
    {
      title: "SHOTGUNS",
      subtitle: "Sport & Tactical",
      image: "/platforms/shotgun.jpg",
    },
  ];

  return (
    <section
  id="platforms"
  className="border-t border-zinc-900 bg-black"
>
      <div className="grid lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              relative
              h-[320px]
              overflow-hidden
              group
              cursor-pointer
              border-r
              border-zinc-900
              border-b
              border-zinc-900
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                scale-100
                group-hover:scale-105
                transition-all
                duration-700
              "
            />

            <div className="absolute inset-0 bg-black/55" />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/20
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-8
                left-8
                right-8
                flex
                justify-between
                items-end
              "
            >
              <div>
                <h3
                  className="
                    text-4xl
                    xl:text-5xl
                    font-black
                    tracking-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-zinc-400
                    uppercase
                    tracking-[3px]
                    text-xs
                  "
                >
                  {item.subtitle}
                </p>
              </div>

              <span
                className="
                  text-red-600
                  text-3xl
                  font-light
                  translate-x-0
                  group-hover:translate-x-2
                  transition
                "
              >
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
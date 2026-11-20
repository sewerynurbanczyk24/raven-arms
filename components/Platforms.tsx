export default function Platforms() {
  const items = [
    {
      title: "AR15",
      subtitle: "Parts & Accessories",
      image: "/platforms/ar15.jpg",
    },
    {
      title: "PCC",
      subtitle: "Components",
      image: "/platforms/pcc.jpg",
    },
    {
      title: "PISTOLS",
      subtitle: "Upgrades",
      image: "/platforms/pistol.jpg",
    },
    {
      title: "SHOTGUNS",
      subtitle: "Sport & Tactical",
      image: "/platforms/shotgun.jpg",
    },
  ];

  return (
    <section className="border-t border-zinc-900">

      <div className="grid md:grid-cols-4">

        {items.map((item) => (
          <div
            key={item.title}
            className="
              relative
              h-72
              overflow-hidden
              group
              border-r
              border-zinc-900
              cursor-pointer
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
                opacity-40
                group-hover:opacity-60
                transition
              "
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute bottom-8 left-8">

              <h3 className="text-4xl font-black">
                {item.title}
              </h3>

              <p className="text-zinc-400 uppercase tracking-[2px] text-sm">
                {item.subtitle}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
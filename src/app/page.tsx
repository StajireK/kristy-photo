export default function HomePage() {
  return (
    <section
      className="w-full relative flex flex-col justify-center items-center text-center px-4"
      style={{
        height: "calc(100vh - 76px)",
        backgroundImage: "url('/honzik.jpeg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0" />

      {/* Obsah přes overlay */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
          Kristýna Pítrová
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-bold drop-shadow-lg">
          rodinná fotografka 📸
        </h2>
        <p className="mt-4 text-lg text-white/90 max-w-xl drop-shadow-md">
          Focení srdcem, v uvolněné přátelské atmosféře 💗
        </p>
      </div>
    </section>
  );
}

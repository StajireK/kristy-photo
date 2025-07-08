export default function HomePage() {
  return (
    <div className="max-w-5xl mt-28 mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Fotka */}
      <img
        src="/kristy-photo-about-me.png"
        alt="Kristýna Pítrová"
        className="rounded-2xl shadow-lg object-cover w-full"
      />

      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold mb-4">O mně</h2>
        <p className="text-lg leading-relaxed">
          Jmenuji se Kristýna a focení je pro mě víc než jen práce – je to
          způsob, jak zachytit lásku, emoce a příběhy. Nejraději fotím v
          přírodě, kde se děti i dospělí cítí přirozeně a uvolněně. Sama jsem
          máma a vím, jak rychle čas letí. Proto vám chci pomoci uchovat ty
          nejcennější okamžiky navždy. 💕
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-5xl min-h-[calc(100vh-85px)] mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-12">
      {/* Fotka */}
      <Image
        src="/kristy-photo-about-me.png"
        alt="Kristýna Pítrová"
        width={329}
        height={205}
        layout="responsive"
        className="rounded-md"
      />

      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold mb-4">O mně</h2>
        <p className="text-xl leading-relaxed">
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

import Image from "next/image";

const images = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
];

export default function GalleryPage() {
  return (
    <section className="bg-soft min-h-screen py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-text">
        Galerie
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl shadow-md">
            <Image
              src={src}
              alt={`Fotka ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

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
        <h2 className="text-2xl font-bold font-alumni uppercase mb-2">O mně</h2>
        <p className="text-xl leading-relaxed font-[cursive]">
          Jmenuji se Kristýna a focení je pro mě víc než jen práce – je to
          způsob, jak zachytit lásku, emoce a příběhy. Ráda bych o sobě
          prozradila ještě pár důležitých informací, které ke mě patří a jsou
          součástí mého života. Kromě toho, že jsem manželka skvělého chlapa,
          tak jsem i máma jedné úžasné holčičky ⭐️ Rodina pro mě vždy byla a
          bude to nejcennější, co jsem kdy mohla mít ❤️ Co bych dále nechtěla
          vynechat je fakt, že jsem také porodní asistentka. Příjde mi to jako
          super nápad, spojit práci porodní asistentky a fotografky. V obou
          případech bych s Vámi byla u těch nejdůležitějších okamžiků a toho si
          nesmírně vážím. Například nafotit s Vámi těhotenské fotky, pak se
          potkat v porodnici a následně nafotit fotky miminka nebo jen tak na
          památku celou Vaší rodinu ❤️ To je momentálně můj sen a cíl.. 💕
        </p>
      </div>
    </div>
  );
}

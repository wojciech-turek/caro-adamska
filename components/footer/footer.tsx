import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-salmon py-12 md:py-73 text-center">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="text-24">Caro Adamska</div>
        <div className="text-16">
          <p>karolina.adamska@gmail.com</p>
          <p>+48 510 593 718</p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Image
            alt="instagram"
            width={40}
            height={40}
            src={"/instagram.png"}
          />
          <Image alt="whatsapp" width={40} height={40} src={"/whatsapp.png"} />

          <Image
            alt="messanger"
            width={40}
            height={40}
            src={"/messanger.png"}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { client } from "../../app/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'footer'] {
    name, email, phone, instagramURL, whatsAppURL, messangerURL
  }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

interface FooterData {
  name: string;
  email: string;
  phone: string;
  instagramURL: string;
  whatsAppURL: string;
  messangerURL: string;
}

export default async function Footer() {
  const {
    name,
    email,
    phone,
    instagramURL,
    whatsAppURL,
    messangerURL,
  }: FooterData = await getData();

  return (
    <footer className="bg-salmon py-12 md:py-73 text-center">
      <div className="container mx-auto flex flex-col gap-4">
        <div className="text-24">{name}</div>
        <div className="text-16">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a href={instagramURL} target="_blank" rel="noopener noreferrer">
            <Image
              alt="instagram"
              width={40}
              height={40}
              src={"/instagram.png"}
            />
          </a>
          <a href={whatsAppURL} target="_blank" rel="noopener noreferrer">
            <Image
              alt="whatsapp"
              width={40}
              height={40}
              src={"/whatsapp.png"}
            />
          </a>
          <a href={messangerURL} target="_blank" rel="noopener noreferrer">
            <Image
              alt="messanger"
              width={40}
              height={40}
              src={"/messanger.png"}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

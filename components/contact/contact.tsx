import { client, urlFor } from "../../app/lib/sanity";
import Image from "next/image";
import ContactForm from "../contactForm/ContactForm";

async function getData() {
  const query = `
  *[_type == 'contact'] {
    title, description, image, email, phone, instagramURL, messangerURL
  }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

interface ContactData {
  title: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  instagramURL: string;
  messangerURL: string;
}

export default async function Contact() {
  const {
    title,
    description,
    image,
    email,
    phone,
    instagramURL,
    messangerURL,
  }: ContactData = await getData();

  const removeProtocolFromUrl = (url: string) =>
    url.replace(/^https?:\/\//, "");

  const extractUsernameFromUrl = (url: string) => url.split("/").pop();

  return (
    <div className="w-full text-center mb-114">
      <div className="px-8 py-4 md:px-8 md:py-0">
        <h3 className="text-4xl mb-5 font-medium text-center">{title}</h3>
        <p className="mb-4 md:mb-10 text-16">{description}</p>
      </div>
      <div className="flex flex-wrap md:mt-16">
        <div className="w-full md:w-1/3 px-8 mb:px-0">
          <Image
            width={300}
            height={300}
            src={urlFor(image).url()}
            alt="Caro Adamska"
            className="rounded-lg overflow-hidden text-center mx-auto"
          />
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="">
              <div className="mt-6 px-0 md:px-4 mb-6 md:mb-0">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Image
                      src={"/envelope.png"}
                      width={16}
                      height={16}
                      alt="email"
                      className="mr-2"
                    />
                    <a href={email}>{email}</a>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/phone.png"}
                      width={16}
                      height={16}
                      alt="phone"
                      className="mr-2"
                    />
                    <p className="text-16">{phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/instagram.png"}
                      width={16}
                      height={16}
                      alt="instagram"
                      className="mr-2"
                    />
                    <a href={instagramURL}>
                      {removeProtocolFromUrl(instagramURL)}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/messanger.png"}
                      width={16}
                      height={16}
                      alt="messanger"
                      className="mr-2"
                    />
                    <a href={messangerURL}>
                      {extractUsernameFromUrl(messangerURL)}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-2/3 md:pl-12 px-8 md:px-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

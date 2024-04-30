import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

async function getData() {
  const query = `
    *[_type == 'about'] {
      title, content, image
    }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

interface AboutData {
  title: string;
  content: any;
  image: string;
}

export default async function About() {
  const { title, image, content }: AboutData = await getData();

  return (
    <div className="flex flex-col px-8">
      <div className="w-full text-center mb-114">
        <h1 className="text-4xl mb-6 md:mb-12 lg:mb-24 font-medium">{title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex lg:w-1/2 justify-center align-middle">
          <div>
            <Image
              width={572}
              height={564}
              src={urlFor(image).url()}
              alt={title}
              className="rounded-lg overflow-hidden mb-8 block mx-auto justify-center w-[250px] lg:w-[1200px] lg:h-auto"
            />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 md:pl-4 lg:ml-8">
          <div className="prose prose-p:text-lg prose-p:mb-4 prose-p:mt-0 justify-center">
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

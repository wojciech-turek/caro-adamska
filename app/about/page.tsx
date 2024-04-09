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
  const data: AboutData = await getData();

  return (
    <>
      <div className="w-full text-center mb-114">
        <h1 className="text-4xl mb-8 md:mb-24 font-medium">{data.title}</h1>
      </div>
      <div className="lg:float-right lg:text-right lg:w-1/2 lg:pr-4 lg:mb-0 sm:text-center">
        <Image
          width={572}
          height={564}
          src={urlFor(data.image).url()}
          alt={data.title}
          className="float-right rounded-lg overflow-hidden"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <div className="prose prose-p:text-lg prose-p:mb-4 prose-p:mt-0">
          <PortableText value={data.content} />
        </div>
      </div>
    </>
  );
}

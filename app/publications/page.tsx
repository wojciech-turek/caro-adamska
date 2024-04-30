import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'publications'] {
    image, slug, _id, logo
  }
  `;

  const data = await client.fetch(query);
  return data;
}

interface HomePagePublicationsProps {
  title: string;
  url?: string;
}

interface SlugInterface {
  current: string;
  _type: string;
}

interface LogoInterface {
  _type: string;
  alt: string;
  asset: any;
}

interface PublicationsData {
  image: string;
  slug: SlugInterface;
  _id: string;
  logo: LogoInterface;
}

export default async function Publications({
  title,
}: HomePagePublicationsProps) {
  const data: PublicationsData[] = await getData();

  return (
    <div className="container mx-auto">
      <h3 className="text-4xl font-black text-center">{title}</h3>
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div className="w-full md:w-1/2 lg:w-1/3 gap-2 py-2">
            <Link key={index} href={`/publications/${item.slug.current}`}>
              <Image
                className="rounded-lg mx-auto h-400 lg:h-480"
                width={395}
                height={395}
                src={urlFor(item.image).url()}
                alt={"1"}
              />
              <Image
                className="rounded-lg mx-auto mt-6 h-[54px]"
                width={200}
                height={50}
                src={urlFor(item.logo).url()}
                alt={item.logo.alt}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

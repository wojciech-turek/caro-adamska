import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

interface PublicationsDetailsProps {
  params: {
    publicationsId: string;
  };
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

interface FilteredDataData {
  gallery: any;
  slug: SlugInterface;
  logo: LogoInterface;
}

export default async function PublicationsDetails({
  params,
}: PublicationsDetailsProps) {
  async function getData() {
    const query = `
    *[_type == 'publications'] {
      gallery, slug, logo
    }
    `;

    const data = await client.fetch(query);
    return data;
  }

  const data: FilteredDataData[] = await getData();

  const currentPublicationImages: FilteredDataData[] = data.filter(
    (item) => item.slug.current === params.publicationsId
  );

  interface CurrentPublicationImages {
    image: string;
  }

  const gallery: CurrentPublicationImages[] =
    currentPublicationImages[0].gallery;

  const logo = currentPublicationImages[0].logo;

  return (
    <div className="">
      <div className="flex">
        <div className="mx-auto">
          <Image
            className="rounded-lg text-center mb-10 h-[54px]"
            width={200}
            height={50}
            src={urlFor(logo).url()}
            alt={logo.alt}
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {gallery.map((image, index) => (
          <div className="w-full md:w-1/2 lg:w-1/3 py-2 px-1">
            <Image
              key={index}
              className="rounded-lg h-400 lg:h-480"
              width={395}
              height={395}
              src={urlFor(image).url()}
              alt={"/"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

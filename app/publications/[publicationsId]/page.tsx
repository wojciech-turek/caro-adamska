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

interface FilteredDataData {
  gallery: any;
  slug: SlugInterface;
}

export default async function PublicationsDetails({
  params,
}: PublicationsDetailsProps) {
  async function getData() {
    const query = `
    *[_type == 'publications'] {
      gallery, slug
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

  return (
    <>
      {gallery.map((image, index) => (
        <div className="mx-auto">
          <div className="md:basis-1/2 lg:basis-1/3">
            <Image
              key={index}
              className="rounded-lg h-480"
              width={395}
              height={300}
              src={urlFor(image).url()}
              alt={"/"}
            />
          </div>
        </div>
      ))}
    </>
  );
}

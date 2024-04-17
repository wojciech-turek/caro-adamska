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
  console.log("filteredData,", currentPublicationImages[0]);

  interface CurrentPublicationImages {
    image: string;
  }
  const gallery: CurrentPublicationImages[] =
    currentPublicationImages[0].gallery;

  return (
    <>
      <div className="container mx-auto">
        {gallery.map((image, index) => (
          <Image
            key={index}
            className="rounded-lg mx-auto"
            width={395}
            height={395}
            src={urlFor(image).url()}
            alt={"/"}
          />
        ))}
      </div>
    </>
  );
}

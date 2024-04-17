import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

interface CommercialCollabDetailsProps {
  params: {
    collabId: string;
  };
}

interface SlugInterface {
  current: string;
  _type: string;
}

interface FilteredData {
  gallery: any;
  slug: SlugInterface;
}

export default async function CommercialCollabDetails({
  params,
}: CommercialCollabDetailsProps) {
  async function getData() {
    const query = `
    *[_type == 'collabs'] {
      gallery, slug
    }
    `;

    const data = await client.fetch(query);
    return data;
  }

  const data: FilteredData[] = await getData();

  const currentCollab: FilteredData[] = data.filter(
    (item) => item.slug.current === params.collabId
  );

  interface CollabDetails {
    image: string;
  }
  const gallery: CollabDetails[] = currentCollab[0].gallery;

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

import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

interface PersonalProjectsDetailsProps {
  params: {
    projectId: string;
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

export default async function PersonalProjectsDetails({
  params,
}: PersonalProjectsDetailsProps) {
  console.log("params", params);

  async function getData() {
    const query = `
    *[_type == 'personal'] {
      gallery, slug
    }
    `;

    const data = await client.fetch(query);
    return data;
  }

  const data: FilteredData[] = await getData();

  const currentPersonalProjects: FilteredData[] = data.filter(
    (item) => item.slug.current === params.projectId
  );

  interface CurrentPersonalProjectsImages {
    image: string;
  }
  const gallery: CurrentPersonalProjectsImages[] =
    currentPersonalProjects[0].gallery;

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

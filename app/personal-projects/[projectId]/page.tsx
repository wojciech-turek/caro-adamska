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
      {gallery.map((image, index) => (
        <div key={index} className="mx-auto">
          <div className="md:basis-1/2 lg:basis-1/3">
            <Image
              key={index}
              className="rounded-lg h-480 py-2 md:py-0"
              width={395}
              height={395}
              src={urlFor(image).url()}
              alt={"/"}
            />
          </div>
        </div>
      ))}
    </>
  );
}

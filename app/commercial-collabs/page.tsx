import { client, urlFor } from "@/app/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
  *[_type == 'collabs'] {
    image, slug, _id
  }
  `;

  const data = await client.fetch(query);
  return data;
}

interface CommercialCollabsProps {
  title: string;
  url?: string;
}

interface SlugInterface {
  current: string;
  _type: string;
}

interface CommercialCollabsData {
  image: string;
  slug: SlugInterface;
  _id: string;
}

export default async function CommercialCollabs({
  title,
}: CommercialCollabsProps) {
  const data: CommercialCollabsData[] = await getData();

  return (
    <div className="container mx-auto">
      <h3 className="text-4xl mb-8 font-black text-center">{title}</h3>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mb-8 md:mb-100"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`/commercial-collabs/${item.slug.current}`}>
                <>
                  <Image
                    className="rounded-lg mx-auto h-400 lg:h-480"
                    width={395}
                    height={395}
                    src={urlFor(item.image).url()}
                    alt={"1"}
                  />
                </>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

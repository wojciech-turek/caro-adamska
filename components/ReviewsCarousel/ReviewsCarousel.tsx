import { client } from "@/app/lib/sanity";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

async function getData() {
  const query = `
  *[_type == 'reviews'] {
    name, review
  }
  `;

  const data = await client.fetch(query);
  return data;
}

interface ReviewsCarouselData {
  name: string;
  review: string;
}
export default async function ReviewsCarousel() {
  const data: ReviewsCarouselData[] = await getData();

  return (
    <>
      <Carousel
        opts={{
          align: "center",
        }}
        className="md:mb-100"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 mx-auto px-1.5"
            >
              <div className="bg-salmon/60 rounded-lg px-6 py-3 flex flex-col gap-3">
                <h3 className="text-4xl mb-4 font-medium text-left">
                  {item.name}
                </h3>

                <p className="text-left">{item.review}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

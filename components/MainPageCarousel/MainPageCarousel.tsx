import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface MainPageCarouselProps {
  title: string;
  url: string;
}

const MainPageCarousel = ({ title, url }: MainPageCarouselProps) => {
  return (
    <div className="container mx-auto">
      <h3 className="text-4xl mb-8 font-medium text-center">{title}</h3>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mb-8 md:mb-100"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Link href={url}>
                <>
                  <Image
                    className="rounded-lg mx-auto"
                    width={395}
                    height={461}
                    src={"/1.jpeg"}
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
};

export default MainPageCarousel;

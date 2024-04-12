import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ReviewsCarousel = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "center",
        }}
        className="md:mb-100"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 mx-auto px-1.5"
            >
              <div className="bg-salmon/60 rounded-lg px-6 py-3 flex flex-col gap-3">
                <h3 className="text-4xl mb-4 font-medium text-left">
                  Jennifer Lopez
                </h3>

                <p className="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium quam modi quas, voluptas optio explicabo culpa
                  pariatur dicta impedit inventore hic ea corporis odit. Dolores
                  id veritatis vel et. Culpa.
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default ReviewsCarousel;

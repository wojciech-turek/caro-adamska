import MainPageCarousel from "@/components/MainPageCarousel/MainPageCarousel";
import Contact from "@/components/contact/contact";
import Introduction from "@/components/introduction/introduction";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <>
      <Introduction />

      <MainPageCarousel title={"Publications"} url={"/publications"} />

      <MainPageCarousel
        title={"Commercial collabs"}
        url={"/commecial-collabs"}
      />
      <MainPageCarousel
        title={"Personal projects"}
        url={"/personal-projects"}
      />

      <Reviews />

      <Contact />
    </>
  );
}

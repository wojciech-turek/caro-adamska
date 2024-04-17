import MainPageCarousel from "@/components/MainPageCarousel/MainPageCarousel";
import Contact from "@/components/contact/contact";
import Introduction from "@/components/introduction/introduction";
import Reviews from "@/components/reviews/reviews";
import Publications from "./publications/page";

export default function Home() {
  return (
    <>
      <Introduction />
      <Publications title={"Publications"} />
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

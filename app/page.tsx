import MainPageCarousel from "@/components/MainPageCarousel/MainPageCarousel";
import Contact from "@/components/contact/contact";
import Introduction from "@/components/introduction/introduction";
import Reviews from "@/components/reviews/reviews";
import Publications from "./publications/page";
import PersonalProjects from "./personal-projects/page";
import CommercialCollabs from "./commercial-collabs/page";

export default function Home() {
  return (
    <>
      <Introduction />
      <Publications title={"Publications"} />
      <CommercialCollabs title={"Commercial collabs"} />
      <PersonalProjects title="Personal projects" />
      <Reviews />
      <Contact />
    </>
  );
}

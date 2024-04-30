import Contact from "@/components/contact/contact";
import Introduction from "@/components/introduction/introduction";
import Reviews from "@/components/reviews/reviews";
import PersonalProjects from "./personal-projects/page";
import CommercialCollabs from "./commercial-collabs/page";
import PublicationsCarousel from "@/components/PublicationsCarousel/PublicationsCarousel";

export default function Home() {
  return (
    <>
      <Introduction />
      <PublicationsCarousel title={"Publications"} />
      <CommercialCollabs title={"Commercial collabs"} />
      <PersonalProjects title="Personal projects" />
      <Reviews />
      <Contact />
    </>
  );
}

import HomepageCarousel from "@/components/HomepageCarousel/HomepageCarousel";
import Contact from "@/components/contact/contact";
import Introduction from "@/components/introduction/introduction";
import Reviews from "@/components/reviews/reviews";

export default function Home() {
  return (
    <>
      <Introduction />

      <HomepageCarousel title={"Publications"} url={"/publications"} />

      <HomepageCarousel
        title={"Commercial collabs"}
        url={"/commecial-collabs"}
      />
      <HomepageCarousel
        title={"Personal projects"}
        url={"/personal-projects"}
      />

      {/* <Reviews /> */}

      <Contact />
    </>
  );
}

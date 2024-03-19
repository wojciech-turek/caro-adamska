import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-wrap justify-center pt-16 pb-24 max-w-7xl mx-auto">
      <div className="w-full text-center mb-114">
        <h1 className="text-4xl mb-24 font-medium">
          Hi, My name is Caro Adamska
        </h1>
      </div>
      <div className="lg:float-right lg:text-right lg:w-1/2 lg:pr-4 lg:mb-0 sm:text-center">
        <Image
          width={572}
          height={564}
          src={"/caro_adamska.jpeg"}
          alt="Caro Adamska"
          className="float-right rounded-lg overflow-hidden"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-4">
        <p className="text-lg mb-4">
          Welcome to my world, where fashion transcends the ordinary, and every
          look tells a story. I'm Caro Adamska, a stylist whose heart beats to
          the rhythm of the shutter, crafting unforgettable narratives through
          fabric and form.
        </p>
        <p className="text-lg mb-4">
          Rooted in the vibrant soil of fashion photo shoots, my expertise
          blooms in the art of visual storytelling. With an intuitive eye for
          detail and a passion for blending textures, colors, and silhouettes, I
          bring each concept to life, transforming visions into tangible
          elegance.
        </p>
        <p className="text-lg mb-4">
          While photo shoots are my home turf, my flair for fashion doesn't end
          there. I extend my stylistic acumen to actors on film sets, ensuring
          their characters are not just seen but felt through every layer of
          their attire. Beyond the set, I empower individuals to rediscover
          their style, offering personal shopping and styling advice that
          resonates with their unique essence.
        </p>
        <p className="text-lg mb-4">
          Recently, I've woven makeup artistry into my repertoire, enhancing my
          ability to curate looks that harmonize from head to toe. This addition
          allows me to offer a complete transformation experience, ensuring
          every aspect of your appearance is in perfect sync.
        </p>
        <p className="text-lg mb-4">
          My philosophy is simple: style should amplify your voice, not
          overshadow it. Whether it's through the lens of a camera or the eyes
          of a passerby, I'm here to help you make an impact that lasts.{" "}
        </p>
        <p className="text-lg mb-4">
          Join me in crafting not just outfits, but a legacy. Let's create
          something unforgettable.
        </p>
      </div>
    </div>
  );
}

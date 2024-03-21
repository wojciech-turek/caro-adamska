import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full text-center mb-114">
      <h2 className="text-3xl font-medium text-center mb-5">Contact</h2>
      <p className="mb-10">
        To contact me - use the below contact form or drop mi a direct message
        via one of my personal channels.
      </p>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/3">
          <Image
            width={572}
            height={564}
            src={"/caro_adamska.jpeg"}
            alt="Caro Adamska"
            className="float-right rounded-lg overflow-hidden"
          />
          <div className="social-media">
            <ul>
              <li>icon karolina.g.adamska@gmail.com</li>
              <li>+48 510 593 718</li>
              <li>instagram.com/karo</li>
              <li>caro adamska stylist</li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-2/3">2/3 width</div>
      </div>
    </div>
  );
};

export default Contact;

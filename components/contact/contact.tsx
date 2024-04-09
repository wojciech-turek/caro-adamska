import Image from "next/image";
import ContactForm from "../contactForm/ContactForm";

const Contact = () => {
  return (
    <div className="w-full text-center mb-114">
      <div className="px-8 py-4 md:px-8 md:py-0">
        <h2 className="text-3xl font-medium text-center mb-5">Contact</h2>
        <p className="mb-4 md:mb-10 text-16">
          To contact me - use the below contact form or drop mi a direct message
          via one of my personal channels.
        </p>
      </div>
      <div className="flex flex-wrap md:mt-16">
        <div className="w-full sm:w-1/3 px-8 mb:px-0">
          <Image
            width={300}
            height={300}
            src={"/caro_adamska.jpeg"}
            alt="Caro Adamska"
            className="rounded-lg overflow-hidden text-center mx-auto"
          />
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="">
              <div className="mt-6 px-0 md:px-4 mb-6 md:mb-0">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Image
                      src={"/envelope.png"}
                      width={16}
                      height={16}
                      alt="email"
                      className="mr-2"
                    />
                    <p className="text-16">karolina.g.adamska@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/phone.png"}
                      width={16}
                      height={16}
                      alt="phone"
                      className="mr-2"
                    />
                    <p className="text-16">+48 510 593 718</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/instagram.png"}
                      width={16}
                      height={16}
                      alt="instagram"
                      className="mr-2"
                    />
                    <p className="text-16">instagram.com/caroadamska</p>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={"/messanger.png"}
                      width={16}
                      height={16}
                      alt="messanger"
                      className="mr-2"
                    />
                    <p className="text-16">caroadamskastylist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full sm:w-2/3 md:pl-12 px-8 md:px-0">
          {/* <div className="w-full"> */}
          <ContactForm />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

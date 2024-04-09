import { Footer } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <div className="mt-20 ">
      <Footer container className="bg-gray-200 py-[100px] rounded-none ">
        <div className="w-[90%] mx-auto">
          <div className="w-full">
            <div className=" flex flex-col md:flex-row  gap-6 justify-between items-center">
              <div className="md:basis-[40%] text-center md:text-start">
                <h2 className="text-xl md:text-2xl font-semibold ">
                  AffluenceAvenue
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, explicabo accusamus aut voluptatum dolore
                  commodi beatae quas magnam suscipit neque minima sit cum
                  dolores voluptatibus eum eligendi repellat. Incidunt,
                  provident?
                </p>
              </div>

              <div className="text-center md:text-start">
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="text-center md:text-start">
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div className="text-center md:text-start">
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <Footer.Divider />
            <div className=" flex  justify-center gap-4">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;

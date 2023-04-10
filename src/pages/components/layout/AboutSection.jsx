import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <section className="about mt-24 mt-sm-48">
        <div className="circle-layer">
            
        </div>
        <div className="container">
          <div className="row gap-16-row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div className="img-portrait">
                <Image
                  src="/assets/image/about.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="px-12">
                <div className="h5 text-primary">ABOUT US</div>
                <div className="h4 mt-4">VACATION TO DREAM DESTINATION</div>

                <div className="p mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  non libero dolor, perferendis iusto voluptas vero quasi, a
                  quidem porro quo iste. Incidunt recusandae error eos obcaecati
                  nam blanditiis autem odit, excepturi, voluptas delectus
                  expedita necessitatibus quod numquam sit tenetur!
                </div>

                <Link
                  href="#"
                  className="btn btn-sm btn-secondary text-white mt-16"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

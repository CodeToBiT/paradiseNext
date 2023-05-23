import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const Notfound = () => {
  return (
    <>
      <div className="single-notfound flex-column mt-32 mt-sm-80">
        <div className="container">
          <div className="row flex-center-center">
            <div className="col-md-7 col-sm-12 ">
              <div className="img-portrait">
                <Image
                  src="/assets/image/404.png"
                  width={0}
                  height={0}
                  sizes="100vh"
                />
              </div>

              <div className="flex-center-center flex-column">
                <h2>Not Found</h2>
                <p className="text-cGray600">
                  The page you requested is cannot be found or does not exist
                </p>
                <Link href="/" className="btn btn-primary rounded-8 mt-16">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;

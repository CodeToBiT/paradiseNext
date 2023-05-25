import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

import { useGetPageDetailsQuery } from "../../../frontend/services/api";

const Single = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: single, isError, isLoading } = useGetPageDetailsQuery(id);

  return (
    <>
      {isLoading == false && single?.data == null ? (
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
                      alt="Paradise Destination"
                    />
                  </div>

                  <div className="flex-center-center flex-column">
                    <h2>Not Found</h2>
                    <p className="text-cGray600">
                      The page you requested is cannot be found or does not
                      exist
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
      ) : (
        <>
          <section className="single-banner">
            <div className="img-wide">
              <Image
                src={single?.data.image}
                width={0}
                height={0}
                sizes="100vw"
                alt="about"
              />
              <div className="single-banner-content">
                <h1 className="text-white">{single?.data.title}</h1>
                <Breadcrumb>
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>

                  <Breadcrumb.Item active>{single?.data.title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </section>

          <section className="single-content mt-12 mt-sm-32">
            <div className="container">
              <div
                className="text-cGray700"
                dangerouslySetInnerHTML={{ __html: single?.data.description }}
              ></div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Single;

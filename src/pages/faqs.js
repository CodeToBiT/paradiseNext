import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import {
  useGetFaqsQuery,
  useGetSettingsQuery,
} from "../../frontend/services/api";

const Faqs = () => {
  const { data: faqs, isLoading } = useGetFaqsQuery();

  const { data: settings } = useGetSettingsQuery();

  return (
    <>
      {isLoading == false && faqs?.data == null ? (
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
          <Head>
            <title>FAQs | Paradise Destination</title>
          </Head>
          <section className="single-banner">
            <div className="img-wide">
              <Image
                src={settings?.data.destination_page_image}
                width={0}
                height={0}
                sizes="100vw"
                alt="about"
              />
              <div className="single-banner-content">
                <h1 className="text-white">Frequently Asked Questions</h1>
                <Breadcrumb>
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>

                  <Breadcrumb.Item active>
                    Frequently Asked Questions
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </section>

          <section className="faq mt-12 mt-sm-32">
            <div className="container">
              <div className="row gap-16-row">
                <div className="col-lg-6 col-sm-12">
                  <div className="img-landscape">
                    <Image
                      src="/assets/image/faqs.png"
                      width={0}
                      height={0}
                      sizes="100vh"
                      alt="faqs"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <Accordion defaultActiveKey="0">
                    {faqs?.data.map((data, i) => {
                      return (
                        <Accordion.Item eventKey={i} key={i}>
                          <Accordion.Header>
                            {/* <span className="text-primary day">
                              Day {i + 1}:
                            </span> */}
                            <p className="fw-medium">{data.title}</p>
                          </Accordion.Header>
                          <Accordion.Body
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Faqs;

// Payment.getLayout = function PageLayout(page) {
//   return (
//     <>
//       <Providers>
//         <NavigationBar />
//         {page}
//         <Footer />
//       </Providers>
//     </>
//   );
// };

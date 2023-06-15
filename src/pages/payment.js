import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// import { Providers } from "../../frontend/services/providers";
// import NavigationBar from "@/components/header/Bottomnav";
// import Footer from "@/components/footer/Footer";

import {
  useGetPageDetailsQuery,
  useGetPaymentQuery,
  useGetSettingsQuery,
} from "../../frontend/services/api";

const Payment = () => {
  const {
    data: single,
    isError,
    isLoading,
  } = useGetPageDetailsQuery("payment-gateway");

  const { data: payment } = useGetPaymentQuery();
  const { data: settings } = useGetSettingsQuery();

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
          <Head>
            <title>{single?.data.title} | Paradise Destination</title>
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

          <section className="payment mt-12 mt-sm-32 ">
            <div className="text-center">
              <h3 className=" h3 mb-24">Bank Account Details</h3>
            </div>
            <div className="container">
              <div className="row gap-16-row">
                {payment?.data.map((data, i) => {
                  return (
                    <div className="col-lg-4 col-sm-12" key={i}>
                      <div className="card-payment shadow-3 flex-center-center flex-column gap-16 px-24 px-sm-40 py-24 ">
                        <Image
                          src={data.image}
                          width={100}
                          height={100}
                          alt={data.bank_name}
                        />
                        <h5 className="fw-bold">{data.bank_name}</h5>

                        <div
                          className="flex-column flex-center-center gap-4 text-cGray700 px-24"
                          style={{ textAlign: "center" }}
                        >
                          <p className="small">
                            Account Holder&apos;s Name:{" "}
                            {data.account_holder_name}
                          </p>
                          <p className="small">
                            Account Number: {data.account_number}
                          </p>
                          <p className="small">
                            Branch Address: {data.branch_address}
                          </p>
                          <p className="small">SWIFT CODE: {data.swift_code}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="single-content mt-12 mt-sm-32">
            <div className="container">
              <div className="row gap-12-row">
                <div className="col-lg-6 col-sm-12">
                  <div className="img-portrait-03">
                    <Image
                      src={single?.data.image}
                      width={0}
                      height={0}
                      sizes="100vh"
                      alt={single?.data.title}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div
                    className="text-cGray700"
                    dangerouslySetInnerHTML={{
                      __html: single?.data.description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Payment;

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

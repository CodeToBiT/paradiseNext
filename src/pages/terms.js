import { Providers } from "../../frontend/services/providers";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

import React from "react";

const Terms = () => {
  return (
    <>
      <section className="single-banner">
        <div className="img-wide">
          <Image
            src="/assets/image/about.webp"
            width={0}
            height={0}
            sizes="100vw"
            alt="about"
          />
          <div className="single-banner-content">
            <h1 className="text-white">Terms And Conditions</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>

              <Breadcrumb.Item active>Terms and Conditions</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;

// Terms.getLayout = function PageLayout(page) {
//     return (
//       <>
//         <Providers>
//           <NavigationBar />
//           {page}
//           <Footer />
//         </Providers>
//       </>
//     );
//   };

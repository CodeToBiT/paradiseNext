import React from "react";
import Head from "next/head";
import TeamsCard from "@/components/card/TeamsCard";
import { Providers } from "../../frontend/services/providers";
import NavigationBar from "@/components/header/Bottomnav";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  useGetOurteamsQuery,
  useGetSettingsQuery,
} from "../../frontend/services/api";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Teams = () => {
  const { data: ourteams } = useGetOurteamsQuery();
  const { data: settings } = useGetSettingsQuery();
  return (
    <>
      <Head>
        <title>Our Teams | Paradise Destination</title>
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
            <h1 className="text-white">Our Teams</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>

              <Breadcrumb.Item active>Our Teams</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section className="ourteams mt-12 mt-sm-32">
        <div className="text-center">
          <h3 className=" h3">Our Teams</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-32">
            {ourteams?.data.map((data, i) => {
              return (
                <div className="col-lg-4 col-sm-12" key={i}>
                  <TeamsCard
                    image={data.image}
                    name={data.name}
                    position={data.position}
                    description={data.description}
                    facebook={data.facebook_link}
                    linkedin={data.linkedin_link}
                    twitter={data.twitter_link}
                    instagram={data.instagram_link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;

// Teams.getLayout = function PageLayout(page) {
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

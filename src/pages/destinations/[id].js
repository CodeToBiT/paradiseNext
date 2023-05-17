import React from "react";
import { useRouter } from "next/router";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import SingleCard from "@/components/card/SingleCard";
import Link from "next/link";

const SingleDestination = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <section className="single-banner">
        <div className="img-wide">
          <Image
            src="/assets/image/about.webp"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="single-banner-content">
            <h1 className="text-white">Nepal</h1>
            <Breadcrumb>
              <li class="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li class="breadcrumb-item">
                <Link href="/destinations">Destinations</Link>
              </li>
              <Breadcrumb.Item active>Nepal</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>
      <section className="destination--listing mt-12 mt-sm-40">
        <div className="intro text-center">
          <div className="text-primary text-center small">UNCOVER PLACES</div>
          <h3>POPULAR PACKAGES</h3>
          <p className="text-cGray600 mt-12">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            recusandae commodi beatae ut eos quos eligendi placeat facilis,
            dolor aperiam.
          </p>
        </div>
        <div className="container">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </section>
    </>
  );
};

export default SingleDestination;

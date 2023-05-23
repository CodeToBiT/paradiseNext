import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner/Banner";
import Destination from "@/components/layout/Destination";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { GiIsland } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import Featured from "@/components/layout/Featured";
import Deals from "@/components/layout/Deals";
import Service from "@/components/layout/Service";
import AboutSection from "@/components/layout/AboutSection";
import Testimonials from "@/components/layout/Testimonials";
import Blog from "@/components/layout/Blog";
import Partner from "@/components/layout/Partner";
import Combo from "@/components/layout/Combo";
import { useState } from "react";

import { useGetDestinationsQuery } from "../../frontend/services/api";

export default function Home() {
  const { data: destinations } = useGetDestinationsQuery();

  const [selectedSlug, setSelectedSlug] = useState("");

  const handleSelectChange = (event) => {
    setSelectedSlug(event.target.value);
  };
  return (
    <>
      <Banner />

      <section className="search-tab position-relative mt-n100 z-5 mb-16 mb-sm-56">
        <div className="container">
          <div className="search-form bg-white align-center flex-wrap shadow-4">
            <div className="bg-primary text-white text-center holiday px-32 py-24 position-relative flex-fill flex-sm-grow-0 text-sm-start">
              <h6 className="fw-regular">Find Your</h6>
              <h2>Holiday</h2>
              <GiIsland className="h3 island" />
            </div>

            <div className="px-32 py-12 flex-fill bg-white">
              <div className="align-center gap-8">
                <GrLocation className="location" />
                <Form.Select value={selectedSlug} onChange={handleSelectChange}>
                  <option value="">Choose your Destination</option>
                  {destinations?.data.map((data, i) => {
                    return (
                      <option value={data.slug} key={i}>
                        {data.name}
                      </option>
                    );
                  })}
                </Form.Select>
                <Link
                  href={`/destinations/${selectedSlug}`}
                  className="btn btn-sm btn-secondary"
                >
                  Search Now
                </Link>
              </div>
              <div className="h6 mt-12 fw-bold text-cGray800">
                Love where you&apos;re going now.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Featured />

      <Destination />

      <Deals />
      <Service />

      <Combo />

      <AboutSection />

      <Testimonials />

      <Blog />

      <Partner />
    </>
  );
}

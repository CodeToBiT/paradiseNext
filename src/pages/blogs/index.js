import React from "react";
import Head from "next/head";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

import BlogCard from "@/components/card/BlogCard";
import {
  useGetBlogsQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

const Blogs = () => {
  const { data: blog } = useGetBlogsQuery();
  const { data: settings } = useGetSettingsQuery();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <Head>
        <title>Blogs | Paradise Destination</title>
      </Head>
      <section className="single-banner">
        <div className="img-wide">
          <Image
            src={settings?.data.destination_page_image}
            width={0}
            height={0}
            sizes="100vw"
            alt="aboutimage"
          />
          <div className="single-banner-content">
            <h1 className="text-white">Our Blogs</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section className="blogs mt-24 mt-sm-40">
        <div className="intro text-center">
          <div className="text-primary text-center small">KNOW BEYOND</div>
          <h3>LASTEST UPDATES</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-24 ">
            {blog?.data.map((data, i) => {
              return (
                <div className="col-lg-3 col-sm-12" key={i}>
                  <BlogCard
                    image={data.image}
                    title={data.title}
                    date={formatDate(data.date)}
                    cat={data.category.name}
                    slug={data.slug}
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

export default Blogs;

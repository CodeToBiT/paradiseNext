import React from "react";
import Head from "next/head";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  useGetBlogDetailsQuery,
  useGetBlogsQuery,
  useGetSettingsQuery,
} from "../../../frontend/services/api";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: blog } = useGetBlogDetailsQuery(id);
  const { data: blogs } = useGetBlogsQuery();
  const {data: settings} = useGetSettingsQuery();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>

    <Head>
    <title>{blog?.data?.seo_title}</title>
          <meta
            name="description"
            content={blog?.data?.meta_description}
          />
          <meta
            name="keywords"
            content={blog?.data?.meta_keywords}
          />
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
            <h1 className="text-white">{blog?.data.title}</h1>
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/blogs">Blogs</Link>
              </li>
              <Breadcrumb.Item active>{blog?.data.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <div className="single-blog mt-12 mt-40">
        <div className="container">
          <div className="row gap-16-row">
            <div className="col-lg-8 col-sm-12">
              <div className="img-landscape-02 rounded-24">
                <Image
                  src={blog?.data.image}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt={blog?.data.slug}
                />
              </div>

              <div className="cat-tag btn mt-12 rounded-16">
                {blog?.data.category.name}
              </div>

              <h5 className="mt-16">{blog?.data.title}</h5>
              <p className="text-cGray500">{formatDate(blog?.data.date)}</p>
              <div
                className="desc small mt-16 text-cGray700"
                dangerouslySetInnerHTML={{ __html: blog?.data.description }}
              ></div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="more-sidebar">
                <h5>Popular blogs</h5>

                <div className="more">
                  {blogs?.data.map((data, i) => {
                    if (data.id != blog?.data.id) {
                      return (
                        <div
                          className="card-more mt-12 mt-sm-16 position-relative"
                          key={i}
                        >
                          <div className="row">
                            <div className="col-4">
                              <div className="img-portrait">
                                <Image
                                  src={data.image}
                                  width={0}
                                  height={0}
                                  sizes="100vh"
                                  alt={data.slug}
                                />
                              </div>
                            </div>
                            <div className="col-8">
                              <h6 className="small clamp-3">{data.title}</h6>
                              <p className="mt-8 text-cGray600">
                                {formatDate(data.date)}
                              </p>
                            </div>
                          </div>
                          <Link href={`/blogs/${data.slug}`} className="stretched-link"></Link>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

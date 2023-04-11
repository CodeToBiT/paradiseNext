import React from "react";
import BlogCard from "../card/BlogCard";

const Blog = () => {
  return (
    <>
      <section className="blogs mt-24 mt-sm-40">
        <div className="text-center">
          <h3>Check our Blogs</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-24 ">
            <div className="col-lg-3 col-sm-12">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-12">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-12">
              <BlogCard />
            </div>
            <div className="col-lg-3 col-sm-12">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

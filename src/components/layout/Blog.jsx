import React from "react";
import BlogCard from "../card/BlogCard";
import { useGetBlogsQuery } from "../../../frontend/services/api";

const Blog = () => {
  const { data: blog } = useGetBlogsQuery();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <section className="blogs mt-24 mt-sm-40">
        <div className="text-center">
          <h3>Check our Blogs</h3>
        </div>
        <div className="container">
          <div className="row gap-16-row mt-24 ">
            {blog?.data.slice(0, 4).map((data, i) => {
              return (
                <div className="col-lg-3 col-sm-12" key={i}>
                  <BlogCard
                    image={data.image}
                    title={data.title}
                    date={formatDate(data.date)}
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

export default Blog;

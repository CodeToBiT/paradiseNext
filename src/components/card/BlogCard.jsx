import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdPaperPlane } from "react-icons/io";

const BlogCard = (props) => {
  return (
    <>
      <div className="card-blog">
        <div className="position-relative">
          <div className="img-portrait">
            <Image src={props.image} width="0" height="0" sizes="100vw" />
          </div>
          <div className="card-blog-content">
            <div className="bcat">TRAVEL</div>
            <p className="fw-bold">{props.title}</p>
            <div className="flex-between mt-12">
              <p className="small text-cGray600">{props.date}</p>

              <IoMdPaperPlane className="h6 text-cGray700" />
            </div>
          </div>
          <Link href="#" className="stretched-link"></Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;



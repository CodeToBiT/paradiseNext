import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamsCard = (props) => {
  return (
    <>
      <div className="card-team ps-80 pb-24">
        <div className="img-portrait rounded-8 position-relative z-1">
          <Image src={props.image} width="0" height="0" sizes="100vw" />
        </div>

        <div className="social d-flex flex-column gap-12">
          <Link href={props.facebook}>
            <Image src="/assets/icon/facebook.png" width="20" height="20" />
          </Link>
          <Link href={props.linkedin}>
            <Image src="/assets/icon/linkedin.png" width="16" height="16" />
          </Link>
          <Link href={props.twitter}>
            <Image src="/assets/icon/twitter.png" width="18" height="18" />
          </Link>
          <Link href={props.instagram}>
            <Image src="/assets/icon/instagram.png" width="16" height="16" />
          </Link>
        </div>
        <div className="card-team-content position-relative z-1 mt-16">
          <h4>{props.name}</h4>
          <div className="p position">{props.position}</div>
          <div
            className="pe-64"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TeamsCard;

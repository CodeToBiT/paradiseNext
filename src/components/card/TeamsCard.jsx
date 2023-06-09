import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamsCard = (props) => {
  return (
    <>
      <div className="card-team ps-80 pb-24">
        <div className="img-portrait rounded-8 position-relative z-1">
          <Image src={props.image} width="0" height="0" sizes="100vw" alt="team" />
        </div>

        <div className="social d-flex flex-column gap-12">
          <Link href={props.facebook}>
            <Image src="/assets/icon/facebook.png" width="20" height="20" alt="facebook"/>
          </Link>
          <Link href={props.linkedin}>
            <Image src="/assets/icon/linkedin.png" width="16" height="16" alt="linkedin" />
          </Link>
          <Link href={props.twitter}>
            <Image src="/assets/icon/twitter.png" width="18" height="18" alt="twitter"/>
          </Link>
          <Link href={props.instagram}>
            <Image src="/assets/icon/instagram.png" width="16" height="16" alt="instagram"/>
          </Link>
        </div>
        <div className="card-team-content position-relative z-1 mt-16">
          <h5>{props.name}</h5>
          <div className="p position fw-medium">{props.position}</div>
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

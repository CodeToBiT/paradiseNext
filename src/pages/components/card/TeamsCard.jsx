import React from "react";
import Image from "next/image";
import Link from "next/link";

const TeamsCard = () => {
  return (
    <>
      <div className="card-team ps-80 pb-24">
        <div className="img-portrait rounded-8 position-relative z-1">
          <Image
            src="/assets/image/team.webp"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>

        <div className="social d-flex flex-column gap-12">
          <Link href="#">
            <Image src="/assets/icon/facebook.png" width="20" height="20" />
          </Link>
          <Link href="#">
            <Image src="/assets/icon/linkedin.png" width="16" height="16" />
          </Link>
          <Link href="#">
            <Image src="/assets/icon/twitter.png" width="18" height="18" />
          </Link>
          <Link href="#">
            <Image src="/assets/icon/instagram.png" width="16" height="16" />
          </Link>
        </div>
        <div className="card-team-content position-relative z-1 mt-16">
          <h4>Utsav Sakhya</h4>
          <div className="p position">CEO</div>
          <p className="pe-64">This is a description for the team dsg ads fgad nbvbnv</p>
        </div>
      </div>
    </>
  );
};

export default TeamsCard;

import Head from "next/head";
import Image from "next/image";
import Banner from "./components/banner/Banner";
import Destination from "./components/layout/Destination";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { GiIsland } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="search-tab position-relative mt-n100 z-5 mb-12 mb-sm-24">
        <div className="container">
          <div className="search-form bg-white align-center flex-wrap shadow-4">
            <div className="bg-primary text-white text-center holiday px-32 py-24 position-relative flex-fill flex-sm-grow-0 text-sm-start">
              <h6 className="fw-regular">Find Your</h6>
              <h2>Holiday</h2>
              <GiIsland className="h3 island" />
            </div>
            <div className="px-32 py-12 flex-fill bg-white">
              <div className="flex-center-between gap-12">
                <SlLocationPin className="h4" />
                <Form.Select>
                  <option>Choose your Destination</option>
                  <option value="1">Japan</option>
                  <option value="2">Thailand</option>
                  <option value="3">Bali</option>
                </Form.Select>
                <Button className="btn btn-sm btn-secondary">Search Now</Button>
              </div>
              <div className="h6 mt-12 fw-bold text-cGray800">
                Love where you're going now.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Destination />
    </>
  );
}
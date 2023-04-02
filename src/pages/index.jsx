import Head from "next/head";
import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { GiIsland } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <Banner />

      <section className="search-tab mt-n100">
        <div className="container">
          <div className="search-form bg-white d-flex flex-wrap">
            <div className="bg-primary text-white holiday px-32 py-24 position-relative">
              <h6 className="fw-regular">Find Your</h6>
              <h2>Holiday</h2>
              <GiIsland className="h3" />
            </div>
            <div className="px-24 py-12 flex-fill bg-white">
              <div className="flex-center-between gap-12">
                <Form.Select>
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button className="btn btn-sm btn-secondary">Search Now</Button>
              </div>
              <div className="h6 mt-12 fw-bold">
                Love where you're going now
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

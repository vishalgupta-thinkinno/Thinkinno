import React from "react";
import { useSelector } from "react-redux";
import WorldMap from "./worldMap";
import {
  FaFunnelDollar,
  FaUniversity,
  FaBuilding,
  FaUtensils,
  FaTruck,
  FaDatabase,
  FaMicrosoft,
  FaHardHat,
  FaHeartbeat,
  FaStore
} from "react-icons/fa";

function About() {
  const content = useSelector((state) => state.textContentSlice?.[0]);
  const aboutPage = content?.pages?.[0];

  const hero = aboutPage?.sections?.[0];
  const whoWeAre = aboutPage?.sections?.[1];
  const serving = aboutPage?.sections?.[2];
  const core = aboutPage?.sections?.[3];
  const sectors = aboutPage?.sections?.[4];

  if (!hero) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div>

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          background: `url(${hero.imageLink}) center/cover no-repeat`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="position-relative">
          <h1 className="display-4 fw-bold">{hero.title}</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-section">
        <div className="container">
          <div className="row align-items-center gx-5 gy-5">
            <div className="col-md-6 position-relative">
              <div className="red-bg"></div>

              <img
                src={whoWeAre.imageLink1}
                alt=""
                className="img-fluid rounded shadow position-relative main-img"
              />

              <img
                src={whoWeAre.imageLink2}
                alt=""
                className="small-img rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                {whoWeAre.title1}
              </h6>

              <h2 className="fw-bold lh-sm mb-3 fs-1">
                {whoWeAre.title2}
              </h2>

              <p className="custom-subheading mb-4 fs-6">
                {whoWeAre.subheading}
              </p>

              <button className="btn btn-danger px-4 py-2">
                {whoWeAre.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* map section */}
      <section className="serving-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">{serving?.title1}</h2>
          <WorldMap />
        </div>
      </section>

      {/* core section */}
      <section className="core-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">{core.title1}</h2>
          <p className="text-muted mb-5">{core.subheading1}</p>

          <div className="row align-items-center">
            <div className="col-md-4 text-md-start text-center mb-4 mb-md-0">
              <h6 className="text-muted">{core.title2}</h6>
              <h2 className="fw-bold text-danger">{core.title3}</h2>
            </div>

            <div className="col-md-8">
              <div className="row g-4">
                {[core.imageLink1, core.imageLink2, core.imageLink3, core.imageLink4].map((img, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="card border-0 shadow-sm p-4 h-100">
                      <img src={img} alt="" width="60" className="mb-3 mx-auto" />
                      <p className="text-danger fw-medium mb-0">
                        {core[`subheading${index + 2}`]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* sector section */}
      <section className="sectors-section py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-4">
            {sectors.title1}
          </h2>

          <div className="row">

            {/* LEFT COLUMN */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">

              <div className="d-flex align-items-center mb-4">
                <FaDatabase className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title7}
                </span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaMicrosoft className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title8}
                </span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaHardHat className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title9}
                </span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaHeartbeat className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title10}
                </span>
              </div>

              <div className="d-flex align-items-center">
                <FaStore className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title11}
                </span>
              </div>

            </div>


            {/* RIGHT COLUMN */}
            <div className="col-12 col-md-6 text-md-end">

              <div className="d-flex align-items-center justify-content-md-end mb-4">
                <FaFunnelDollar className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title2}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-md-end mb-4">
                <FaUniversity className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title3}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-md-end mb-4">
                <FaBuilding className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title4}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-md-end mb-4">
                <FaUtensils className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title5}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-md-end">
                <FaTruck className="text-danger me-3 fs-4" />
                <span className="fw-semibold">
                  {sectors.title6}
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
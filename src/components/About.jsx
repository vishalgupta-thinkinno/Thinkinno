import React from "react";
import { useSelector } from "react-redux";

function About() {

  const content = useSelector(
    (state) => state.textContentSlice?.[0]
  );

  const aboutPage = content?.pages?.[0];

  const hero = aboutPage?.sections?.[0];
  const whoWeAre = aboutPage?.sections?.[1];
  const serving = aboutPage?.sections?.[2];
  const core = aboutPage?.sections?.[3];
  const sectors = aboutPage?.sections?.[4];

  if (!hero) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div>

      <section
        className="position-relative d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: "450px",
          background: `url(${hero.imageLink}) center/cover no-repeat`
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>

        {/* Content */}
        <div className="position-relative">
          <h1 className="display-4 fw-bold">
            {hero.title}
          </h1>
        </div>
      </section>

     <section className="container py-5">
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
</section>

    </div>
  );
}

export default About;
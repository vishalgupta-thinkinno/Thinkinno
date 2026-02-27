  {/* <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h6 className="text-uppercase text-muted">{whoWeAre.title1}</h6>
            <h2 className="fw-bold">{whoWeAre.title2}</h2>
            <h4 className="fw-bold text-primary mt-3">
              {whoWeAre.title3} {whoWeAre.title4}
            </h4>

            <p className="mt-3">{whoWeAre.subheading}</p>

            <button className="btn btn-primary mt-3">
              {whoWeAre.button}
            </button>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <img
                  src={whoWeAre.imageLink1}
                  alt=""
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-6">
                <img
                  src={whoWeAre.imageLink2}
                  alt=""
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="bg-light py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">{serving.title1}</h2>
          <p className="mt-3">
            We proudly deliver software solutions to clients worldwide.
          </p>
        </div>
      </section>


      <section className="py-5 text-center">
        <div className="container">

          <h6 className="text-uppercase text-muted">
            {core.title1}
          </h6>

          <h2 className="fw-bold">
            {core.title2} {core.title3}
          </h2>

          <p className="mt-3">
            {core.subheading1}
          </p>

          <div className="row mt-5">

            <div className="col-md-3">
              <img src={core.imageLink1} alt="" className="mb-3" />
              <p>{core.subheading2}</p>
            </div>

            <div className="col-md-3">
              <img src={core.imageLink2} alt="" className="mb-3" />
              <p>{core.subheading3}</p>
            </div>

            <div className="col-md-3">
              <img src={core.imageLink3} alt="" className="mb-3" />
              <p>{core.subheading4}</p>
            </div>

            <div className="col-md-3">
              <img src={core.imageLink4} alt="" className="mb-3" />
              <p>{core.subheading5}</p>
            </div>

          </div>

        </div>
      </section>



      <section className="bg-light py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            {sectors.title1}
          </h2>

          <div className="row">

            {Object.keys(sectors)
              .filter(key => key.startsWith("title") && key !== "title1")
              .map((key, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <div className="p-3 border rounded bg-white shadow-sm">
                    {sectors[key]}
                  </div>
                </div>
              ))
            }

          </div>

        </div>
      </section> */}
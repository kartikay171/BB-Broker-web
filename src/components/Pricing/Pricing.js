import Pages from "../page/pages";

const pricing = () => {
  return (
    <>
      <Pages>
        {/* <div class="content-wrapper"> */}
        {/* <div class="container-full"> */}
        <div class="content-header">
          <div class="d-flex align-items-center">
            <div class="mr-auto">
              <h3 class="page-title">Price</h3>
              <div class="d-inline-block align-items-center">
                <nav>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">
                        <i class="mdi mdi-home-outline"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item" aria-current="page">
                      Sample Page
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Pricing Table
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section class="content">
          <div class="row no-gutters">
            <div class="col-lg-4">
              <div class="box p-60 text-center">
                <h4 class="text-danger text-uppercase">Per Builder Plan</h4>
                <br />
                <p>
                  Dealing with selected builders, get unlimited access to all
                  their projects in your region.
                </p>
                <br />
                <h3 class="price text-danger">
                  <sup>₹</sup>2990
                  <span>Year / builder</span>
                </h3>

                <br />
                <a class="btn btn-round btn-danger" href="#">
                  Buy Now
                </a>
              </div>
            </div>

            <div class="col-lg-4">
              <div
                class="box box-shadowed box-round text-center py-80 px-60 bg-primary"
                // style="margin-top:-20px"
                style={{ marginTop: "20px" }}
              >
                <h4 class="text-uppercase">All Access Plan</h4>
                <br />
                <p>Unlimited access to all builders in your region.</p>
                <br />
                <h3 class="price">
                  <sup>₹</sup>19990
                  <span>Year</span>
                </h3>
                <br />
                <a class="btn btn-round btn-outline btn-white " href="#">
                  Buy Now
                </a>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="box p-60 text-center">
                <h4 class="text-success text-uppercase">Add team member</h4>
                <br />
                <p>
                  Your team members can access all builders you have access to.
                </p>
                <p>Track your team's site visits, registrations and bookings</p>

                <h3 class="price text-success">
                  <sup>₹</sup>2399
                  <span>Year / member</span>
                </h3>

                <a class="btn btn-round btn-success" href="#">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
        {/* </div> */}
      </Pages>
    </>
  );
};
export default pricing;

import Pages from "../page/pages";
import golf from "../../img/golf.png";
import cardImg from "../../img/card.png";
import circle from "../../img/cirlce.svg";
import { Dropdown } from "react-bootstrap";

const projectList = () => {
  return (
    <>
      <Pages>
        {/* <div>hello</div>
        <div>hello2</div> */}

        <div style={{ backgroundColor: "#f2ebeb", borderRadius: "7px" }}>
          <div
            class="alert"
            style={{ paddingBottom: "0px", marginBottom: "50px" }}
            role="alert"
          >
            <div class="row">
              <div class="col-md-1">
                <img src={circle} />
              </div>
              <div class="col-md-4">
                <p className="color1 pPro">
                  You do not have access to this builder
                </p>
              </div>
            </div>

            <hr className="hrcolor hrmargin" />
            <div class="row">
              <div class="col-md-3">
                <button
                  type="button"
                  style={{ borderRadius: "35px" }}
                  class="btn btn-primary fontSizePro "
                >
                  CHECK PLANS & PRICING{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="col-md-4">
                <p className="fontp">
                  or if you have Access Code from Builder.
                </p>
              </div>
              <div class="col-md-2 fontSizePro click">
                <button type="button" class="btn btn-link ">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="butt"
              style={{
                backgroundColor: "#dbe5f3",
                color: "#4a4b4c",
                marginBottom: "33px",
              }}
            >
              Project Type: All (46)
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="cardwid card1 bg-body">
            <div
              className="card-header golf"
              style={{ backgroundColor: "white" }}
            >
              <div className="col-md-8">
                <h4 className="card-title est" style={{ fontSize: "15px" }}>
                  <a
                    href=""
                    style={{
                      color: "#000",
                    }}
                  >
                    <strong>GOLF ESTATE</strong>
                  </a>
                </h4>
                <p className="sector"> Sector: 60, Gurugram, Haryana</p>
              </div>
              <div className="col-md-4">
                <div className="header-elements imgPadding">
                  <img src={golf} />
                </div>
              </div>
            </div>
            <img src={cardImg} />
            <p className="updated">Last Updated On: 2 Days ago</p>
          </div>
        </div>
      </Pages>
    </>
  );
};
export default projectList;

const sidebar = () => {
  return (
    <aside class="main-sidebar">
      <section class="sidebar position-relative">
        <div class="multinav sideFont">
          <div class="multinav-scroll" style={{ height: "100%" }}>
            <ul class="sidebar-menu shadowSide" data-widget="tree">
              {/* <li class="header">Dashboard</li> */}
              <li>
                <a href="index.html">
                  <span>HOME</span>{" "}
                </a>
              </li>
              <li>
                <a href="builder-list.html">
                  <span>BROADCASTS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>PROJECTS</span>
                </a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <span>BUILDERS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>CLIENT VISITS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>EVENTS & POLLS</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>YOUR TEAM</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>NEWS</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>CIRCLE RATES</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>REAL ESTATE LAYWERS</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="sidebar-footer"> </div>
    </aside>
  );
};
export default sidebar;

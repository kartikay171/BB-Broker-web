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
                  <span>Home</span>{" "}
                </a>
              </li>
              <li>
                <a href="builder-list.html">
                  <span>Owner Profile</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Project</span>
                </a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <span>Broadcasts</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>Channel Partners</span>
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>Meetings & Visits</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>Reports</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>Team</span>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <span>Event & Polls</span>{" "}
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

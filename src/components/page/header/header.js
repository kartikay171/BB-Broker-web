import logo from "../../../img/bbLogo.png";
const header = () => {
  return (
    <>
      <header class="main-header">
        <div class="d-flex align-items-center logo-box justify-content-start">
          {/* <a
            href="#"
            class="waves-effect waves-light nav-link d-none d-md-inline-block mx-10 push-btn bg-transparent"
            data-toggle="push-menu"
            role="button"
          >
            <span class="icon-Align-left">
              <span class="path1"></span>
              <span class="path2"></span>
              <span class="path3"></span>
            </span>
          </a> */}
          <a href="index.html" class="logo">
            <div class="logo-lg">
              <span class="light-logo">
                <img src={logo} class="BBlogo" alt="logo" />
              </span>
              <span class="dark-logo">
                <img src="" alt="logo" />
              </span>
            </div>
          </a>
        </div>
        <nav class="navbar navbar-static-top">
          <div class="app-menu">
            <ul class="header-megamenu nav">
              <li class="nav-item d-none d-xl-inline-block pr-90 side">
                <a href="#" class="text-white font-size-16 l-h-50">
                  All Projects
                </a>
              </li>
              <li class="nav-item d-none d-xl-inline-block pr-40 fav">
                <a href="#" class="text-white l-h-50">
                  <u>Fav Project</u>
                </a>
              </li>

              <li class="nav-item d-none d-xl-inline-block">
                <div class="form-group has-search pt-10 ">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control color"
                    placeholder="Search for builder or properties"
                  />
                </div>
              </li>
            </ul>
          </div>

          <div class="navbar-custom-menu r-side">
            <ul class="nav navbar-nav">
              <li class="dropdown user user-menu">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  title="User"
                >
                  Welcome, Mr. Kunal Sarin{" "}
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </a>
                <ul class="dropdown-menu animated flipInX">
                  <li class="user-body">
                    <a class="dropdown-item" href="#">
                      <i class="ti-user text-muted mr-2"></i> Profile
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="ti-wallet text-muted mr-2"></i> My Wallet
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="ti-settings text-muted mr-2"></i> Settings
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      <i class="ti-lock text-muted mr-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default header;

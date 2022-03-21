import Header from "./header/header";
import SideBar from "./sideBar/sideBar";

const pages = ({ children }) => {
  return (
    <div className="">
      <Header />
      <SideBar />
      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        <div className="container-full">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default pages;

import { Fragment } from "react";

import Helmet from "./Helmet";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({
  pageId,
  children,
  pageTitle,
  showFooter = true,
  showNavigation = true,
}) => {
  return (
    <Fragment>
      <Helmet title={pageTitle} />
      <Banner />
      <div className="page-layout flex flex-col justify-between">
        <div>
          {showNavigation && <Navbar pageId={pageId} />}
          <main className="page-main-content">{children}</main>
        </div>
        {showFooter && <Footer />}
      </div>
    </Fragment>
  );
};

export default PageLayout;

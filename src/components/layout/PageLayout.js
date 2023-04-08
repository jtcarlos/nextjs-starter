import { Fragment } from "react";

import Helmet from "./Helmet";

const PageLayout = ({
  children,
  pageTitle,
  showFooter = true,
  showNavigation = true,
}) => {
  return (
    <Fragment>
      <Helmet title={pageTitle} />
      <div className="page-layout flex flex-col justify-between">
        <div>
          {showNavigation && <p>Navigation Bar</p>}
          <main className="page-main-content">{children}</main>
        </div>
        {showFooter && <p>Footer Content</p>}
      </div>
    </Fragment>
  );
};

export default PageLayout;

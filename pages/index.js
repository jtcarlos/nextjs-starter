import React from "react";

import PageLayout from "@layout/PageLayout";

const index = () => {
  return (
    <PageLayout pageTitle="Start">
      <div className="mt-[5rem] text-center">
        <h1 className="text-2xl text-weight-bold">
          Welcome to NextJS Starter Project!
        </h1>
      </div>
    </PageLayout>
  );
};

export default index;

import React from "react";
import Image from "next/image";

import Button from "@elements/Button";
import PageLayout from "@layout/PageLayout";

const index = () => {
  return (
    <PageLayout pageId="home" pageTitle="Start">
      <div className="container mt-[10rem] mx-auto xl:px-[20rem]">
        <div className="flex">
          <Image
            className="hidden md:block"
            src="/home-grid.png"
            width={150}
            height={150}
          />
          <div className="ml-10">
            <h1 className="text-primary font-bold text-3xl">
              Welcome to NextJS Starter!
            </h1>
            <p className="my-4">
              This is the perfect starting point for building your next web
              project using the power of Next.js. This setup will give you the
              flexibility to create a project that meets your exact needs
              without any unnecessary bloat.
            </p>
            <Button
              color="bg-primary text-white"
              size="small"
              text="Get Started"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default index;

import { useContext } from "react";

import Container from "./Container";

import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "@context/AppContext";

const Banner = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleCloseBanner = () => {
    dispatch({ type: "HIDE_BANNER" });
  };

  if (state?.isBannerVisible)
    return (
      <div className="bg-light-primary py-2">
        <Container>
          <div className="flex justify-between items-center">
            <div className="mr-5">
              This repository contains bare bone elements and components. Learn
              my other works at{" "}
              <a
                className="underline underline-offset-4"
                href="https://jtcarlos.com/"
                target="_blank"
              >
                www.jtcarlos.com
              </a>
            </div>
            <button onClick={handleCloseBanner} className="text-primary">
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
          </div>
        </Container>
      </div>
    );
  return null;
};

export default Banner;

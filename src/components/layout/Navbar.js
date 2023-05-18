import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import Container from "./Container";
import Button from "@elements/Button";

import settings from "@core/settings.json";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationLink = ({ index, pageId, item, router }) => {
  switch (item.type) {
    case "link":
      return (
        <li key={index} className="w-full md:w-auto">
          <Link
            href={item?.link}
            className={classNames(
              {
                "bg-primary text-white md:bg-transparent md:text-primary":
                  pageId === item?.pageId,
              },
              {
                "md:hover:text-primary hover:bg-gray-100 ":
                  pageId !== item?.pageId,
              },
              "md:hover:bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
            )}
            aria-current="page"
          >
            {item.label}
          </Link>
        </li>
      );
    case "button":
      return (
        <li
          key={index}
          className="hidden md:block w-full mt-5 md:mt-0 md:w-auto"
        >
          <Button
            size={item?.size}
            text={item?.label}
            border={item?.border}
            className={item?.className}
            onClick={() => router.push(item?.link)}
          />
        </li>
      );
  }
};

const Navbar = ({ pageId }) => {
  const [isMobileDrawOpen, setIsMobileDrawOpen] = useState(false);
  const router = useRouter();

  const { navigation } = settings;

  return (
    <nav>
      <Container className="flex flex-wrap items-center justify-between py-4">
        <Image
          src="/logo-long.png"
          width={250}
          height={250}
          alt="Flowbite Logo"
        />

        <div className="flex items-center">
          {navigation?.links
            ?.filter((item) => item?.type === "button")
            ?.map((item) => (
              <Button
                size={item?.size}
                text={item?.label}
                border={item?.border}
                className="bg-primary text-white inline-block md:hidden"
                onClick={() => router.push(item?.link)}
              />
            ))}
          <button
            onClick={() => setIsMobileDrawOpen(!isMobileDrawOpen)}
            type="button"
            data-collapse-toggle="navbar-dropdown"
            className="inline-flex items-center p-2 ml-2 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className="w-full md:block md:w-auto" id="navbar-dropdown">
          <ul
            className={classNames(
              { "hidden md:flex": !isMobileDrawOpen },
              "flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            )}
          >
            {navigation?.links?.map((item, index) => (
              <NavigationLink
                item={item}
                index={index}
                pageId={pageId}
                router={router}
              />
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

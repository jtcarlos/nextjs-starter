import React from "react";
import Link from "next/link";

import settings from "@core/settings.json";

const Footer = () => {
  const { footer } = settings;

  return (
    <div className="text-center py-5 px-6 border-t-2 border-slate-200">
      <p className="text-sm text-slate-500">
        Copyright © 2023. Designed and developed by John Thomas Carlos
        <span className="mx-2">|</span>
        <a
          href="https://www.jtcarlos.com/"
          className="underline underline-offset-2"
          target="_blank"
        >
          www.jtcarlos.com
        </a>
      </p>
      <p className="mt-3">
        {footer?.links?.map((link, index) => (
          <span
            className="mx-1 underline underline-offset-2 text-sm py-1 px-2"
            key={index}
          >
            <Link href={link?.link}>{link?.label}</Link>
          </span>
        ))}
      </p>
    </div>
  );
};

export default Footer;

import React, { Fragment } from "react";
import { ChevronUp, DollarSign, Globe } from "react-feather";

export default function Footer() {
  return (
    <div className="fixed sm:relative w-full bottom-0 bg-white border-t px-3 z-[100]">
      <div className="flex sm:flex-col max-w-6xl mx-auto  items-center py-[12px] justify-between">
        <div className="flex sm:flex-col items-center">
          <p className="text-[14px] font-semibold text-gray-600  capitalize">
            &copy;2022 Airbnb, inc
          </p>
          <div className="flex sm:my-4 items-center ml-4">
            {[
              { title: "privacy", link: "/privacy" },
              { title: "terms", link: "/terms" },
              { title: "about us", link: "/about" },
            ].map((e, index, array) => {
              return (
                <Fragment key={index}>
                  <a className="mx-3 flex items-center" href="">
                    <span className="text-[14px] capitalize font-semibold text-gray-600 ">
                      {e.title}
                    </span>
                  </a>

                  {index !== array.length - 1 && (
                    <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="flex items-center ">
          <a className="flex items-center mx-3" href="">
            <Globe size={14} className="mr-2 sm:text-gray-500 text-gray-600 " />
            <span className="text-[14px] capitalize font-semibold  text-gray-600">
              english(us)
            </span>
          </a>{" "}
          <a className="flex items-center  mx-3" href="">
            <DollarSign size={14} className="mr-1 text-gray-600 " />
            <span className="text-[14px] capitalize  font-semibold text-gray-600 ">
              USD
            </span>
          </a>
          <a className="flex items-center mx-3" href="">
            <span className="text-[14px] truncate capitalize font-semibold text-gray-600 ">
              Support & resources
            </span>
            <ChevronUp size={18} className="ml-1 text-gray-600 " />
          </a>
        </div>
      </div>
    </div>
  );
}

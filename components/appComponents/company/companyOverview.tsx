import React, { useEffect } from "react";
import LinkedinIcon from "../../../icons/linkedin.icon";
import PlusIcon from "../../../icons/plus.icon";
import NewTab from "../../../icons/newTab";
import MinusIcon from "../../../icons/minus.icon";
function CompanyOverview() {
  return (
    <div className="bg-white border-b-2 p-4">
      <div>
        Google LLC is an American multinational technology company that
        specializes in Internet-related services and products, which include
        online advertising technologies, a search engine, cloud computing,
        software, and hardware.
      </div>
      <div className="mt-2">
        <div className="py-4">
          <a
            href="https://www.google.com/"
            className="bg-blue-500 inline-flex gap-1 border-2 border-blue-500 text-white rounded-md px-1 hover:bg-white hover:text-black "
          >
            Visit website <NewTab size={20} />
          </a>
          <div className="flex gap-2 py-2">
            <a href="linkedin.com">
              <LinkedinIcon size={20} />
            </a>
            <a href="linkedin.com">
              <LinkedinIcon size={20} />
            </a>
            <a href="linkedin.com">
              <LinkedinIcon size={20} />
            </a>
            <a href="linkedin.com">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="flex gap-16 py-4">
          <div>
            <strong> Founded</strong>
            <div>2020</div>
          </div>
          <div>
            <strong> Size</strong>
            <div>1000-2000</div>
          </div>
          <div>
            <strong> Location</strong>
            <div>Dhaka, Bangladesh</div>
          </div>
          <div>
            <strong> Funding</strong>
            <div>A series</div>
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-4">Highlights</div>
          <div className="flex gap-20">
            <ul>
              <li className="flex gap-2">
                <PlusIcon size={20} /> Work-life balance
              </li>
              <li className="flex gap-2">
                <PlusIcon size={20} /> Good employee benifits
              </li>
              <li className="flex gap-2">
                <PlusIcon size={20} /> Rich in Culture
              </li>
            </ul>{" "}
            <ul>
              <li className="flex gap-2">
                <MinusIcon size={16} /> Employee retenstion
              </li>
              <li className="flex gap-2">
                <MinusIcon size={16} /> Small team
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyOverview;

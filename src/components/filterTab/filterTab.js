import React from "react";

import { BiPlus } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { RiArchive2Fill } from "react-icons/ri";

export default function FilterTab() {
  return (
    <div>
      <button>
        <BiPlus />
      </button>
      <button>
        <HiPhoneMissedCall />
      </button>
      <button>
        <RiArchive2Fill />
      </button>
    </div>
  );
}

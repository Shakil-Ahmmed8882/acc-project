


// This file defines the StoriesLink component,
// which renders a styled link to the "STORIES" page.


import Link from "next/link";

const StoriesLink = () => (
  <Link
    href={"/stories"}
    className="border-b pb-2 border-[#bfbfbf] text-white leading-[140%] font-normal text-2xl font-riviera"
  >
    THE WORLD OF ACC
  </Link>
);

export default StoriesLink;




// This file defines the StoriesLink component,
// which renders a styled link to the "STORIES" page.


import Link from "next/link";

const StoriesLink = () => (
  <Link
    href={"/stories"}
    className="border-b pb-2 border-[#bfbfbf] text-2xl text-white font-thin"
  >
    STORIES
  </Link>
);

export default StoriesLink;

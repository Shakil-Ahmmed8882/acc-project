"use client";

import Image from "next/image";
import Container from "../container/Container";
import footerBrand from "@/assets/img/shared/footer/brandFooter.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SmoothScroll from "@/providers/SmoothScroll";

const Footer = () => {
  const footerNavs = [
    {
      items: [
        { href: "/heritage", name: "Heritage" },
        { href: "/craftsmanship", name: "Craftsmanship" },
        { href: "/aging", name: "Aging" },
      ],
    },
    {
      items: [
        { href: "/cigars", name: "Cigars" },
        { href: "/spirits", name: "Spirits" },
        { href: "/accessories", name: "Accessories" },
      ],
    },
    {
      items: [
        { href: "/cookies", name: "Cookies" },
        { href: "/privacy", name: "Privacy" },
        { href: "/terms", name: "Terms & Conditions" },
      ],
    },
    {
      items: [
        { href: "/faq", name: "FAQ" },
        { href: "/contact", name: "Contact" },
      ],
    },
  ];
  const pathname = usePathname();

  // Check if the current route starts with /admin2
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <SmoothScroll>
    <footer
      className={`pb-10
    ${isAdminRoute ? "hidden" : "block"}
    `}
    >
      <Container className={"pt-10"}>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src={footerBrand}
              alt="ACHIEVEMENT CIGAR LOGO"
              width={14}
              height={40}
              className="w-28 md:w-36 sm:mx-auto"
            />
          </Link>
        </div>
        <div className="space-y-6 justify-between items-center px-10 md:px-40 md:space-y-0 my-8 py-10 border-t border-b grid grid-cols-2 lg:grid-cols-4">
          {footerNavs.map((nav, navIdx) => (
            <ul
              className="space-y-6 text-sm text-light-text uppercase"
              key={`nav-${navIdx}`}
            >
              {nav.items.map((item, itemIdx) => (
                <li key={`item-${itemIdx}`}>
                  <a
                    href={item.href}
                    className="duration-150 hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="text-light-text text-sm text-center">
          © 2024 ACHIVEMENT CIGAR COMPANY.
        </p>
      </Container>
    </footer>

    </SmoothScroll>
  );
};

export default Footer;

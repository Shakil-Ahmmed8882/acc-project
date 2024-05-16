import Image from "next/image";
import Container from "../container/Container";

import footerBrand from "@/assets/img/shared/footer/brandFooter.svg";

const Footer = () => {
const footerNavs = [
  {
    items: [
      {
        href: "javascript:void()",
        name: "Heritage",
      },
      {
        href: "javascript:void()",
        name: "Craftsmanship",
      },
      {
        href: "javascript:void()",
        name: "Aging",
      },
    ],
  },
  {
    items: [
      {
        href: "javascript:void()",
        name: "Cigars",
      },
      {
        href: "javascript:void()",
        name: "Spirits",
      },
      {
        href: "javascript:void()",
        name: "Accessories",
      },
    ],
  },
  {
    items: [
      {
        href: "javascript:void()",
        name: "Cookies",
      },
      {
        href: "javascript:void()",
        name: "Privacy",
      },
      {
        href: "javascript:void()",
        name: "Terms & Conditions",
      },
    ],
  },
  {
    items: [
      {
        href: "javascript:void()",
        name: "FAQ",
      },
      {
        href: "javascript:void()",
        name: "Contact",
      },
    ],
  },
];


  return (
    <footer className="my-12">
      <Container className="">
        <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
          <Image
            src={footerBrand}
            alt="ACHIVEMENT CIGAR  LOGO"
            width={128}
            height={40}
            className="w-32 sm:mx-auto"
          />
        </div>

          <div className="space-y-6 justify-between flex items-center px-40 md:space-y-0 my-8 py-10 border-t border-b">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-6 text-sm text-light-white-clr" key={idx}>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <a
                      href={el.href}
                      className="duration-150 hover:text-gray-400"
                    >
                      {el.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        <p className="text-light-white-clr text-center">
          © 2024 ACHIVEMENT CIGAR COMPANY.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

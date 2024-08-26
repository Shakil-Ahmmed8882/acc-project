import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/terms.jpg";
import Container from "@/components/shared/container/Container";
import ContactUs from "@/components/shared/FooterPages/contactUs/ContactUs";
import Information from "@/components/shared/FooterPages/Information/Information";
import AccUpdate from "@/components/shared/FooterPages/Information/AccUpdate";

const page = () => {
  const data = [
    {
      title: "General Information",
      sections: [
        {
          subtitle: "Eligibility",
          description:
            "Only individuals who can form legally binding contracts under applicable law may purchase products from our site.",
        },
        {
          subtitle: "Changes to Terms",
          description:
            "We reserve the right to update or modify these terms at any time. Your continued use of the site constitutes your acceptance of those changes.",
        },
      ],
    },
    {
      title: "Products and Orders",
      sections: [
        {
          subtitle: "Product Descriptions",
          description:
            "We strive to ensure that product descriptions on our site are as accurate as possible, but we do not guarantee that the information is always complete or error-free.",
        },
        {
          subtitle: "Pricing",
          description:
            "All prices are listed in [Currency] and are subject to change at any time without notice.",
        },
        {
          subtitle: "Order Acceptance",
          description:
            "We reserve the right to refuse or cancel any order at any time for reasons including but not limited to product availability, errors in the description, or pricing information.",
        },
        {
          subtitle: "Payment",
          description:
            "Payment must be made in full before your order is shipped. We accept [Payment Methods].",
        },
        {
          subtitle: "Shipping and Delivery",
          description:
            "Shipping times are estimates and not guaranteed. We are not responsible for delays caused by third-party carriers.",
        },
      ],
    },
    {
      title: "Returns and Refunds",
      sections: [
        {
          subtitle: "Return Policy",
          description:
            "Items can be returned within 30 days of receipt for a full refund. Items must be unused and in original packaging.",
        },
        {
          subtitle: "Refunds",
          description:
            "Refunds will be processed within 7-10 business days of receiving the returned item. The original payment method will be credited.",
        },
        {
          subtitle: "Non-Returnable Items",
          description:
            "Certain items are non-returnable, including custom products and perishable goods.",
        },
      ],
    },
    {
      title: "Use of the Website",
      sections: [
        {
          subtitle: "Intellectual Property",
          description:
            "All content on this site, including text, graphics, logos, and images, is the property of [Your Company] or its content suppliers.",
        },
        {
          subtitle: "User Conduct",
          description:
            "You agree not to use the site for any unlawful purpose or to violate the rights of others.",
        },
        {
          subtitle: "Third-Party Links",
          description:
            "We are not responsible for the content of any third-party sites linked to or from our site.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      sections: [
        {
          subtitle: "Disclaimer of Warranties",
          description:
            "The site is provided on an 'as is' and 'as available' basis. We make no warranties, express or implied, regarding the site.",
        },
        {
          subtitle: "Limitation of Liability",
          description:
            "In no event shall [Your Company] be liable for any damages arising from the use of the site or products purchased through the site.",
        },
      ],
    },
    {
      title: "Governing Law and Dispute Resolution",
      sections: [
        {
          subtitle: "Governing Law",
          description:
            "These terms shall be governed by and construed in accordance with the laws of [Jurisdiction].",
        },
        {
          subtitle: "Dispute Resolution",
          description:
            "Any disputes arising out of or related to these terms shall be resolved through binding arbitration in [Location].",
        },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <Banner title={"Terms & Conditions"} imageUrl={img} />
      <Container className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20"}>
        <AccUpdate des="Welcome to Achievement Cigar Company. These Terms and Conditions govern your use of our website, products, and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services." />
        <Information data={data} />
        <ContactUs />
      </Container>
    </div>
  );
};

export default page;

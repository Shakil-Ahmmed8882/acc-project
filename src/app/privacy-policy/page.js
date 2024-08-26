import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/privacy.jpg";
import Container from "@/components/shared/container/Container";
import ContactUs from "@/components/shared/FooterPages/contactUs/ContactUs";
import Information from "@/components/shared/FooterPages/Information/Information";
import AccUpdate from "@/components/shared/FooterPages/Information/AccUpdate";

const page = () => {
  const data = [
    {
      title: "Information We Collect",
      sections: [
        {
          subtitle: "Personal Information",
          description:
            "We may collect personal information such as your name, email address, phone number, billing and shipping addresses, and payment details when you make a purchase or create an account with us.",
        },
        {
          subtitle: "Usage Data",
          description:
            "We collect information about your interactions with our website, including IP addresses, browser type, pages viewed, and the time spent on our site. This helps us improve your user experience and optimize our services.",
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          description:
            "We use cookies and similar tracking technologies to track activity on our website and hold certain information. This helps us understand your preferences and enhance your shopping experience.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      sections: [
        {
          subtitle: "To Provide Our Services",
          description:
            "We use your personal information to process your orders, manage your account, and provide you with customer support.",
        },
        {
          subtitle: "To Improve Our Services",
          description:
            "Usage data and feedback help us refine our product offerings and improve the functionality of our website.",
        },
        {
          subtitle: "Marketing and Promotions",
          description:
            "With your consent, we may use your email address to send you promotional materials and offers related to our cigars, spirits, and luxury accessories.",
        },
      ],
    },
    {
      title: "How We Share Your Information",
      sections: [
        {
          subtitle: "Third-Party Service Providers",
          description:
            "We may share your personal information with third-party service providers who assist us in delivering our services, such as payment processors, shipping companies, and marketing partners.",
        },
        {
          subtitle: "Legal Requirements",
          description:
            "We may disclose your information if required by law, or to protect the rights, property, or safety of [Your Company Name], our customers, or others.",
        },
      ],
    },
    {
      title: "Your Rights and Choices",
      sections: [
        {
          subtitle: "Access and Correction",
          description:
            "You have the right to access and correct your personal information at any time through your account settings or by contacting us directly.",
        },
        {
          subtitle: "Opt-Out",
          description:
            "You can opt-out of receiving marketing communications from us by following the unsubscribe link in our emails, or by updating your preferences in your account settings.",
        },
        {
          subtitle: "Data Deletion",
          description:
            "You may request the deletion of your personal information, subject to certain legal obligations, by contacting us directly.",
        },
      ],
    },
    {
      title: "Security of Your Information",
      sections: [
        {
          subtitle: "",
          description:
            "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your data.",
        },
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      sections: [
        {
          subtitle: "",
          description:
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
        },
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      sections: [
        {
          subtitle: "",
          description:
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we protect your information.",
        },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <Banner title={"Privacy Policy"} imageUrl={img} />
      <Container className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20"}>
        <AccUpdate
          des="At Achievement Cigar Company, your privacy is a top priority. This
        Privacy Policy outlines how we collect, use, and protect your personal
        information when you interact with our website and services, including
        our selection of cigars, spirits, accessories, and luxury storage
        products."
        />
        <Information data={data} />
        <ContactUs />
      </Container>
    </div>
  );
};

export default page;

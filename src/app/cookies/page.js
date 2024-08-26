import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/cookies.jpg";
import Container from "@/components/shared/container/Container";
import ContactUs from "@/components/shared/FooterPages/contactUs/ContactUs";
import Information from "@/components/shared/FooterPages/Information/Information";
import AccUpdate from "@/components/shared/FooterPages/Information/AccUpdate";

const page = () => {
  const data = [
    {
      title: "What Are Cookies?",
      sections: [
        {
          description:
            "Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help the website remember your actions and preferences over a period of time, so you don’t have to re-enter them whenever you come back to the site or browse from one page to another.",
        },
      ],
    },
    {
      title: "Types of Cookies We Use",
      sections: [
        {
          subtitle: "Essential Cookies",
          description:
            "These cookies are necessary for the operation of our website. They enable you to navigate the site and use its features, such as accessing secure areas and processing payments. Without these cookies, certain services you request cannot be provided.",
        },
        {
          subtitle: "Performance Cookies",
          description:
            "These cookies collect information about how visitors use our website, such as which pages are visited most often and if users encounter error messages. The data collected by these cookies is aggregated and anonymous, and it helps us improve the performance and functionality of our site.",
        },
        {
          subtitle: "Functional Cookies",
          description:
            "Functional cookies allow our website to remember your preferences, such as your username, language, or the region you are in. This enables us to provide you with a more personalized experience and avoid having to re-enter your preferences each time you visit.",
        },
        {
          subtitle: "Targeting/Advertising Cookies",
          description:
            "These cookies are used to deliver advertisements that are more relevant to you and your interests. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns. These cookies may be placed on your device by third-party advertisers with our permission.",
        },
      ],
    },
  ];
  const data2 = [
    {
      title: "Third-Party Cookies",
      sections: [
        {
          description:
            "In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements to and on behalf of these third parties. These third-party cookies are subject to the privacy policies of the respective providers.",
        },
      ],
    },
    {
      title: "Your Choices Regarding Cookies",
      sections: [
        {
          subtitle: "Managing Cookies in Your Browser",
          description:
            "Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Be aware that disabling cookies may affect the functionality of certain services and your ability to access certain features.",
        },
        {
          subtitle: "Opting Out of Targeted Advertising",
          description:
            "You can opt out of targeted advertising by adjusting your browser settings or by visiting websites like the Network Advertising Initiative (NAI) or the Digital Advertising Alliance (DAA) in your area. Please note that even if you opt out, you may still see advertisements, but they will not be as relevant based on your interests.",
        },
      ],
    },
    {
      title: "Changes to This Cookies Policy",
      sections: [
        {
          description:
            "We may update this Cookies Policy from time to time to reflect changes in our practices or legal obligations. We encourage you to review this policy periodically to stay informed about how we use cookies.",
        },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <Banner title={"Cookies Policy"} imageUrl={img} />
      <Container className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20"}>
        <AccUpdate des="Achievement Cigar Company uses cookies and similar tracking technologies on our website to enhance your browsing experience, improve our services, and deliver personalized content and advertisements. This Cookies Policy explains what cookies are, how we use them, and your options for managing them." />
        <Information data={data} />
        {/* how to use Cookies */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-10 text-white font-riviera text-justify uppercase">
            How We Use Cookies
          </h2>
          <div className="pl-4">
            <div>
              <h3 className="text-xl font-medium text-white font-riviera text-justify mb-4">
                We use cookies to:
              </h3>
              <ul className="list-disc list-inside">
                <li className="text-base text-white font-riviera text-justify opacity-80">
                  Ensure that our website functions properly. Remember your
                </li>
                <li className="text-base text-white font-riviera text-justify opacity-80">
                  preferences and settings. Understand how you interact with our
                  website.
                </li>
                <li className="text-base text-white font-riviera text-justify opacity-80">
                  Deliver personalized content and advertisements.
                </li>

                <li className="text-base text-white font-riviera text-justify opacity-80">
                  Analyze website traffic and improve our site.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Information data={data2} />
        <ContactUs />
      </Container>
    </div>
  );
};

export default page;

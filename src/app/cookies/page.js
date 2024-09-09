import Banner from "@/components/Banner/Banner";
import img from "@/assets/img/footerPage/cookies.jpg";
import Container from "@/components/shared/container/Container";
// import ContactUs from "@/components/shared/FooterPages/contactUs/ContactUs";
import AccUpdate from "@/components/shared/FooterPages/Information/AccUpdate";
import CookieInfo from "@/components/shared/FooterPages/Information/CookieInfo";

const page = () => {
  const data = [
    {
      title: "What Are Cookies?",
      subtitle:
        "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website.",
      sections: [
        {
          description:
            "They are widely used to make websites work more efficiently, as well as to provide information to the website owner.",
        },
      ],
    },
    {
      title: "How We Use Cookies",
      subtitle:
        "We use cookies to enhance your experience on our website, ACC1952.com. Cookies help us to:",
      sections: [
        {
          description: "Recognize your device when you visit our site.",
        },
        {
          description: "Remember your preferences and settings.",
        },
        {
          description: "Understand how you interact with our content.",
        },
        {
          description: "Analyze website traffic to improve our services.",
        },
        {
          description: "Facilitate social media sharing and integration.",
        },
      ],
    },
    {
      title: "Types of Cookies We Use",
      subtitle: "We use the following types of cookies:",
      sections: [
        {
          description:
            "Essential Cookies: These are necessary for the website to function correctly. They enable you to navigate our site and use its features.",
        },
        {
          description:
            "Performance Cookies: These cookies collect information about how visitors use our website, helping us to improve the performance and design of our site.",
        },
        {
          description:
            "Functional Cookies: These cookies allow the website to remember choices you make (such as your username or language) and provide enhanced, more personalized features.",
        },
        {
          description:
            "Targeting/Advertising Cookies: These cookies are used to deliver relevant ads to you based on your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.",
        },
      ],
    },
    {
      title: "Third-Party Cookies",
      subtitle:
        "We may also use third-party cookies from service providers like Google Analytics and social media platforms.",
      sections: [
        {
          description:
            "Help us understand how you use our site and deliver relevant content to you.",
        },
      ],
    },
    {
      title: "Managing Cookies",
      subtitle: "You can control and manage cookies in several ways:",
      sections: [
        {
          description:
            "Browser Settings: Most browsers allow you to refuse cookies or delete them. Please refer to your browser’s help section for instructions on how to do this.",
        },
        {
          description:
            "Opt-Out Tools: You can opt out of tracking by Google Analytics by visiting the Google Analytics opt-out page.",
        },
        {
          description:
            "Please note that disabling cookies may affect the functionality of our website.",
        },
      ],
    },
    {
      title: "Changes to This Cookies Policy",
      subtitle: "We may update this Cookies Policy from time to time.",
      sections: [
        {
          description:
            "Any changes will be posted on this page, and the effective date will be updated accordingly.",
        },
      ],
    },
    {
      title: "Contact Us",
      subtitle:
        "If you have any questions about this Cookies Policy, please contact us at info@acc1952.com.",
      sections: [],
    },
  ];

  return (
    <div className="bg-black">
      <Banner title={"Cookies Policy"} imageUrl={img} />
      <Container
        className={"sm:px-10 lg:px-36 2xl:px-80 font-riviera mt-20 pb-32"}
      >
        <AccUpdate des="Achievement Cigar Company uses cookies and similar tracking technologies on our website to enhance your browsing experience, improve our services, and deliver personalized content and advertisements. This Cookies Policy explains what cookies are, how we use them, and your options for managing them." />
        <CookieInfo data={data} />
        {/* how to use Cookies */}
        {/* <div className="mb-10">
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
        </div> */}
        {/* <ContactUs /> */}
      </Container>
    </div>
  );
};

export default page;

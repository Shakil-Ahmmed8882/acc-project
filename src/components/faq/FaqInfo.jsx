import Accordion from "./Accordion";

const FaqInfo = () => {
  const faqData = [
    {
      section: "Orders and Shipping",
      items: [
        {
          question: "How do I place an order?",
          answer:
            "To place an order, simply browse our collection of cigars, spirits, accessories, and luxury storage products. Add the desired items to your cart, proceed to checkout, and follow the on-screen instructions to complete your purchase.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit cards, including Visa, MasterCard, American Express, and Discover. We also accept payments via PayPal and Apple Pay.",
        },
        {
          question: "How long will it take to receive my order?",
          answer:
            "Shipping times vary based on your location and the shipping method you select at checkout. Standard shipping typically takes 3-7 business days, while expedited options are available for faster delivery.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we offer international shipping to select countries. Please note that shipping rates and delivery times vary depending on your location. Customs fees may apply.",
        },
      ],
    },
    {
      section: "Products and Availability",
      items: [
        {
          question: "Are your cigars hand-rolled?",
          answer:
            "Yes, all our cigars are hand-rolled by experienced artisans using the finest tobacco leaves. We take pride in offering premium cigars that deliver a superior smoking experience.",
        },
        {
          question: "How do I store my cigars to keep them fresh?",
          answer:
            "To keep your cigars fresh, store them in a humidor with a relative humidity level of 65-70%. Our selection of luxury storage options includes humidors designed to maintain the perfect environment for your cigars.",
        },
        {
          question: "What is the return policy for cigars and accessories?",
          answer:
            "Due to the nature of our products, we cannot accept returns on opened bottles of spirits. However, unopened bottles and accessories can be returned within 30 days of purchase for a full refund or exchange. Please see our return policy for more details.",
        },
      ],
    },
    {
      section: "Account and Membership",
      items: [
        {
          question: "Do I need an account to place an order?",
          answer:
            "No, you can place an order as a guest. However, creating an account allows you to track your orders, save your preferences, and enjoy a faster checkout process in the future.",
        },
        {
          question:
            "What are the benefits of joining the Membership Cigar Club?",
          answer:
            "Members of the Achievement Cigar Club enjoy exclusive benefits, including early access to new products, special discounts, and invitations to members-only events. Sign up today to start enjoying these perks!",
        },
        {
          question: "How do I update my account information?",
          answer:
            'To update your account information, log in to your account and go to the "Account Settings" section. Here, you can update your contact details, payment methods, and preferences.',
        },
      ],
    },
    {
      section: "Customer Support",
      items: [
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our customer support team by emailing [Email Address] or by calling [Phone Number]. Our team is available Monday to Friday, 9 AM to 5 PM EST.",
        },
        {
          question:
            "What should I do if I received a damaged or incorrect item?",
          answer:
            "If you receive a damaged or incorrect item, please contact our customer support team immediately. We will arrange for a replacement or refund and provide instructions for returning the item.",
        },
        {
          question: "Do you offer gift-wrapping services?",
          answer:
            "Yes, we offer gift wrapping for all orders. During checkout, you can select the gift wrapping option and include a personalized message for the recipient.",
        },
      ],
    },
    {
      section: "Loyalty and Rewards",
      items: [
        {
          question: "How can I earn points with the Rewards Program?",
          answer:
            "Earn points by making purchases, referring friends, and engaging with our brand on social media. Points can be redeemed for discounts on future purchases.",
        },
        {
          question: "Can I combine rewards points with other discounts?",
          answer:
            "Yes, you can combine your reward points with other promotions and discounts at checkout. However, some restrictions may apply during special sales events.",
        },
        {
          question: "How do I check my rewards balance?",
          answer:
            'To check your reward points balance, log in to your account and navigate to the "Rewards" section. Your current balance and available rewards will be displayed there.',
        },
      ],
    },
  ];

  return (
    <>
      {faqData.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-10 text-white font-riviera text-justify uppercase">
            {section.section}
          </h2>
          <Accordion data={section.items} />
        </div>
      ))}
    </>
  );
};

export default FaqInfo;

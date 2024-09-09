import Accordion from "./Accordion";

const FaqInfo = () => {
  const faqData = [
    {
      section: "Orders and Shipping",
      items: [
        {
          question: "What makes our cigars unique?",
          answer:
            "Our cigars are crafted using the finest tobacco leaves, with minimal veins, aged to perfection, and hand-rolled by skilled artisans to deliver a smooth, rich flavor with every puff.",
        },
        {
          question: "How should I store my cigars?",
          answer:
            "To maintain the quality and freshness of your cigars, store them in a humidor at a relative humidity of 65-70% and a temperature of 65-70°F.",
        },
        {
          question: "What is the proper way to cut a cigar?",
          answer:
            "Use a sharp cigar cutter to remove the cap, making a clean cut just above the shoulder of the cigar. This ensures an even draw. A V-cutter and Punch are another option, up to the discretion of the smoker.",
        },
        {
          question: "How do I light a cigar properly?",
          answer:
            "Use a butane lighter or wooden matches. Hold the flame just below the foot of the cigar, rotating it to ensure an even burn, then gently puff as you light.",
        },
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we offer international shipping to most countries. Please get in touch with us for quotations.",
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

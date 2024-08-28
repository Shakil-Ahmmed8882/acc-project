const CookieInfo = ({ data }) => {
  return (
    <div>
      {data.map((section, index) => (
        <Info
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          sections={section.sections}
        />
      ))}
    </div>
  );
};

const Info = ({ title, subtitle, sections }) => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-10 text-white font-riviera text-justify uppercase">
        {title}
      </h2>
      <h3 className="text-xl font-medium text-white font-riviera text-justify mb-4">
        {subtitle}
      </h3>
      <div className="">
        {sections.map((subsection, idx) => (
          <ul key={idx} className="">
            <li className="text-base text-white font-riviera text-justify opacity-80 pb-10 ">
              • {subsection.description}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CookieInfo;

const Information = ({ privacyPolicyData }) => {
  return (
    <div>
      {privacyPolicyData.map((section, index) => (
        <Info key={index} title={section.title} sections={section.sections} />
      ))}
    </div>
  );
};

const Info = ({ title, sections }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-10 text-white font-riviera text-justify uppercase">
        {title}
      </h2>
      <div className="pl-4">
        {sections.map((subsection, idx) => (
          <div key={idx}>
            {subsection.subtitle && (
              <h3 className="text-xl font-medium text-white font-riviera text-justify mb-4">
                {subsection.subtitle}
              </h3>
            )}
            <p className="text-base text-white font-riviera text-justify opacity-80 pb-10">
              {subsection.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;

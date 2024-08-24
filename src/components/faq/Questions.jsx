const Question = ({ des }) => {
  return (
    <div>
      <h3 className="text-white font-riviera leading-[22px] font-medium pb-8">
        Frequently Asked Questions
      </h3>
      <p className="text-white font-riviera opacity-80 pb-20 text-justify">
        {des}
      </p>
    </div>
  );
};

export default Question;

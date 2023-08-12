interface PlanGroupProps {
  isMonthly: boolean;
}

const PlanGroup: React.FC<PlanGroupProps> = ({ isMonthly }) => {
  const plans = [
    {
      title: "Basic",
      monthlyPrice: "19.99",
      annualPrice: "199.99",
      storage: "500 GB",
      users: "2 Users Allowed",
      sendLimit: "Send up to 3 GB",
      isMaster: false,
    },
    {
      title: "Professional",
      monthlyPrice: "24.99",
      annualPrice: "249.99",
      storage: "1 TB",
      users: "5 Users Allowed",
      sendLimit: "Send up to 10 GB",
      isMaster: true,
    },
    {
      title: "Master",
      monthlyPrice: "39.99",
      annualPrice: "399.99",
      storage: "2 TB",
      users: "10 Users Allowed",
      sendLimit: "Send up to 20 GB",
      isMaster: false,
    },
  ];
  return (
    <div className="grid justify-center items-center md:grid-cols-[1fr_1fr_1fr] text-center text-grayish-blue ">
      {plans.map((plan) => (
        <div
          key={plan.title}
          className={`flex flex-col gap-4 py-12 px-8 max-h-[95%] rounded-2xl  ${
            plan.isMaster
              ? "bg-gradient-to-r from-primary-gradient-start to-primary-gradient-end text-white max-h-full"
              : "bg-white"
          } ${plan.isMaster ? "" : "rounded-l-xl"}`}
        >
          <h2>{plan.title}</h2>
          <p
            className={`${
              plan.isMaster ? "text-white" : ""
            } text-4xl flex items-center justify-center text-dark-grayish-blue`}
          >
            $
            <span className={` text-7xl my-3`}>
              {isMonthly ? plan.monthlyPrice : plan.annualPrice}
            </span>
          </p>
          <hr />
          <p>{plan.storage} Storage</p>
          <hr />
          <p>{plan.users}</p>
          <hr />
          <p>{plan.sendLimit}</p>
          <hr />
          <button
            className={`${
              plan.isMaster
                ? "bg-white text-primary-gradient-end outline hover:bg-primary-gradient hover:text-white"
                : " bg-primary-gradient text-white outline hover:bg-white"
            } uppercase text-sm tracking-widest mt-2 py-4 px-20 rounded-xl`}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
};
export default PlanGroup;

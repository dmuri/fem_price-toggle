import { Switch } from "@headlessui/react";

interface AnnuallyMonthlySelectorProps {
  isMonthly: boolean;
  toggle: () => void;
}

const AnnuallyMonthlySelector: React.FC<AnnuallyMonthlySelectorProps> = ({
  isMonthly,
  toggle,
}) => {
  return (
    <div className="flex gap-5 items-center mb-12">
      <p className="text-grayish-blue text-sm">Annually</p>
      <div>
        <Switch
          checked={isMonthly}
          onChange={toggle}
          className={` bg-primary-gradient relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${isMonthly ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <p className="text-grayish-blue text-sm">Monthly</p>
    </div>
  );
};

export default AnnuallyMonthlySelector;

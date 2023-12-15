import React, { ReactNode } from "react";

interface IPropsHeading {
  title: string;
  subtitle?: string;
  icon: ReactNode;
}

const Heading: React.FC<IPropsHeading> = ({ title, subtitle, icon }) => {
  return (
    <div className="text-start">
      <div className="flex space-x-3 items-center border-b-4 pb-1 mb-1 w-fit">
        <span className="text-[40px]">{icon}</span>
        <h1 className="text-3xl font-bold mb-2 capitalize">{title}</h1>
      </div>
      {subtitle && <p className="text-lg text-gray-900 mb-10 font-semibold">{subtitle}</p>}
    </div>
  );
};

export default Heading;

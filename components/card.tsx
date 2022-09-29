import { FC, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white text-slate-900 m-4 p-4 rounded-lg border shadow">
      {children}
    </div>
  );
};

export default Card;

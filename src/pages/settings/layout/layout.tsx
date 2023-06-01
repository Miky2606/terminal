import { ReactNode } from "react";

export const SettingsMenu = ({
  children,
  title,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full  border-green-400">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

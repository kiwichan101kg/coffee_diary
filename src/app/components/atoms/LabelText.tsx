import React, { ReactNode } from "react";

const LabelText = ({ children }: { children: ReactNode }) => {
  return <div className={"flex items-center gap-4 "}>{children}</div>;
};

export default LabelText;

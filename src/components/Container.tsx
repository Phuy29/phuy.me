import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="max-w-6xl mx-auto">{children}</div>;
};

export default Container;

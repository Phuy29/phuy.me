const Container = (props: any) => {
  const { children } = props;
  return <div className="max-w-6xl mx-auto">{children}</div>;
};

export default Container;

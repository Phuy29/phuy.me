import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-sm md:text-base dark:bg-dark-300 p-1 text-center dark:text-white border-t dark:border-gray-700">
      Designed and made with ❤ by{" "}
      <span className="font-bold underline cursor-pointer">Phuy</span>
      <p>© 2022 </p>
    </div>
  );
};

export default Footer;

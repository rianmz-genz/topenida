import React from "react";
import Text from "../atoms/Text";

const Footer = ({ value }: FooterProps) => {
  return (
    <footer className="mb-3">
      <Text textStyle="Footer" value={value} />
    </footer>
  );
};

export default Footer;

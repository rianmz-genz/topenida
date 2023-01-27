import Link from "next/link";
import React from "react";
import Text from "./Text";

const TextLink = ({ href, color, value, textStyle }: TextLinkProps) => {
  return (
    <Link href={href}>
      <Text textStyle={textStyle} value={value} color={color} />
    </Link>
  );
};

export default TextLink;

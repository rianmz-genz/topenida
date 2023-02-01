import React from "react";

const Text = ({ value, textStyle, color }: TextProps) => {
  const getTextStyle = (): string | undefined => {
    switch (textStyle) {
      case "HeadingOne":
        return "font-raleway text-3xl font-semibold";
      case "HeadingTwo":
        return "font-raleway text-xl font-semibold";
      case "Bold":
        return "font-raleway font-semibold";
      case "SmallBold":
        return "font-raleway text-sm font-semibold";
      case "SubTitle":
        return "font-raleway text-lg font-semibold";
      case "Description":
        return "font-opensans text-sm leading-5 truncate";
      case "DescriptionTourCard":
        return "font-opensans text-sm leading-5";
      case "DescriptionDetail":
        return "font-opensans text-sm leading-6"
      case "DescriptionBlog":
        return "font-opensans text-sm leading-5 h-36 overflow-hidden";
      case "DescriptionBlogCard":
        return "font-opensans text-sm leading-5 truncate";
      case "Footer":
        return "w-full flex justify-center text-sm";
    }
  };
  const getTextColor = (): string | undefined => {
    switch (color) {
      case "Gray":
        return "text-thegray";
      case "Blue":
        return "text-blue";
    }
  };
  return <p className={`${getTextStyle()} ${getTextColor()}`}>{value}</p>;
};

export default Text;

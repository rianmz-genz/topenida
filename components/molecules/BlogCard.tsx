import Image from "next/image";
import React, { FC } from "react";
import Text from "../atoms/Text";
import TextLink from "../atoms/TextLink";
import LineDivider from "../atoms/LineDivider";

const BlogCard: FC<Blog> = ({id,image, title, description, postAt, author}) => {
  return (
    <div className="w-full px-4 mt-5 pb-4">
      <Image
        src={image}
        width={100}
        height={100}
        alt="blog image"
        className="w-full rounded-lg"
      />
      <div className="w-fit px-3 py-1 text-white mt-5 mb-2 rounded-full bg-blue">
        <Text textStyle="SmallBold" value="General Information" />
      </div>
      <div className="space-y-1 mb-4">
        <Text textStyle="HeadingOne" value={title} color="Gray" />
        <Text
          textStyle="DescriptionTourCard"
          value={`${postAt} - ${author}`}
          color="Gray"
        />
        <Text textStyle="DescriptionBlog" value={description} />
      </div>
      <div className="mb-4">
        <TextLink
          textStyle="Description"
          value="Read More ->"
          href="/blog/"
          color="Blue"
        />
      </div>
      <LineDivider />
    </div>
  );
};

export default BlogCard;

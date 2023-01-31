import React from "react";
import PageTemplate from "../../components/layout/PageTemplate";
import LineDivider from "../../components/atoms/LineDivider";
import Image from "next/image";
import Text from "../../components/atoms/Text";
import TextLink from "../../components/atoms/TextLink";
import { contentData } from "../../store/contentData";
import BlogCard from "../../components/molecules/BlogCard";

const index = () => {
  return (
    <PageTemplate title="Blogs">
      <LineDivider />
      {contentData.blogs.map((blog) => (
        <BlogCard
          id={blog.id}
          key={blog.id}
          title={blog.title}
          image={blog.image}
          description={blog.description}
          author={blog.author}
          postAt={blog.postAt}
        />
      ))}
    </PageTemplate>
  );
};

export default index;

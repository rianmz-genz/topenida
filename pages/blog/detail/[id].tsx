import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageTemplate from "../../../components/layout/PageTemplate";
import { contentData } from "../../../store/contentData";
import { useState } from "react";
import LineDivider from "../../../components/atoms/LineDivider";
import DetailSkeleton from "../../../components/organisms/DetailSkeleton";
import Container from "../../../components/layout/Container";
import Text from "../../../components/atoms/Text";
import Image from "next/image";
const DetailBlog = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const [employee, setEmployee] = useState<{ [key: string]: any }>({});
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 1000);
  }, []);
  useEffect(() => {
    const p = contentData.blogs.find((x) => x.id == id);
    setEmployee({ ...p });
  }, [router.isReady]);
  return (
    <PageTemplate title="Detail">
      <LineDivider />
      <section
        className={`${
          isSkeleton ? "fixed" : "hidden"
        }  w-full max-w-[470px] bg-white z-50 h-screen top-0 left-1/2 -translate-x-1/2`}
      >
        <DetailSkeleton />
      </section>
      <Container>
        <div className="mt-5">
          <Text textStyle="HeadingOne" value={employee.title} />
          <div className="flex items-center space-x-1 mt-3">
            <Text
              textStyle="Description"
              color="Gray"
              value={`${employee.postAt} by`}
            />{" "}
            <Text
              textStyle="Description"
              color="Blue"
              value={employee.author}
            />
          </div>
          <Image src={employee.image} width={100} height={100} alt="detail blog image" className="w-full rounded-xl my-5" />
          <Text textStyle="DescriptionDetail" value={employee.description} />
        </div>
      </Container>
    </PageTemplate>
  );
};

export default DetailBlog;

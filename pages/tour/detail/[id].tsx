import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageTemplate from "../../../components/layout/PageTemplate";
import { contentData } from "../../../store/contentData";
import { useState } from "react";
import Text from "../../../components/atoms/Text";
import Container from "../../../components/layout/Container";
import LineDivider from "../../../components/atoms/LineDivider";
import { IoPricetagOutline } from "react-icons/io5";
import Image from "next/image";
import { FiCheck, FiX } from "react-icons/fi";
import HomeSkeleton from "../../../components/organisms/HomeSkeleton";
import DetailSkeleton from "../../../components/organisms/DetailSkeleton";
const DetailTour = () => {
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
    const p = contentData.tours.find((x) => x.id == id);
    setEmployee({ ...p });
  }, [router.isReady]);
  console.log(employee);
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
          <Text textStyle="DescriptionDetail" value={employee.description} />
          <div className="flex justify-between w-full h-fit items-center mt-5">
            <div>
              <Text textStyle="DescriptionDetail" value="Start From" />
              <div className={`flex items-center space-x-2`}>
                <Text textStyle="Bold" value={<IoPricetagOutline />} />
                <Text
                  textStyle="HeadingTwo"
                  value={`Rp. ${employee.pay?.toLocaleString("id-ID")}/Pax`}
                />
              </div>
            </div>
            <button className="bg-blue px-4 py-2 rounded-lg text-white text-sm">
              BOOK NOW
            </button>
          </div>
          <Image
            src={employee.image}
            width={100}
            height={100}
            alt="detail tour"
            className="w-full my-5 rounded-xl h-[450px] object-cover"
          />
        </div>
        {employee.longDesc && (
          <div className="mb-5">
            <Text textStyle="DescriptionDetail" value={employee.longDesc} />
          </div>
        )}
        <Text textStyle="HeadingTwo" value="Tour Iternary" />
        {employee.iternary?.map((iternaryList: any) => (
          <div className="my-2 space-y-1" key={iternaryList.title}>
            <Text textStyle="Bold" value={iternaryList.title} />
            <Text
              textStyle="DescriptionDetail"
              value={iternaryList.description}
            />
          </div>
        ))}
        {employee.justDesc?.map((desc: string) => (
          <div key={desc} className="my-3">
            <Text textStyle="DescriptionDetail" value={desc} />
          </div>
        ))}
        <div className="mt-5">
          <Text textStyle="HeadingTwo" value="Include" />
          <ul className="mt-2">
            {employee.include?.map((includeList: string) => (
              <li className="flex items-center space-x-2" key={includeList}>
                <FiCheck />
                <Text textStyle="DescriptionDetail" value={includeList} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <Text textStyle="HeadingTwo" value="Exclude" />
          <ul className="mt-2">
            {employee.exclude?.map((excludeList: string) => (
              <li className="flex items-center space-x-2" key={excludeList}>
                <FiX />
                <Text textStyle="DescriptionDetail" value={excludeList} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </PageTemplate>
  );
};

export default DetailTour;

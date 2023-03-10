import Head from "next/head";
import React, { FC, ReactNode } from "react";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const PageTemplate: FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Topenida - {title}</title>
        <meta
          name="description"
          content="Topenida adalah website yang menyediakan jasa untuk traveling ke pulau bali."
        />
        <meta name="title" content="Topenida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <main className="w-full h-full min-h-screen bg-background flex justify-center pb-4">
        <div className="w-full max-w-[470px] bg-white min-h-screen h-fit">
          {/* navbar */}
          <Navbar />
          <div className="w-full h-16"></div>
          {children}
        </div>
      </main>
      {/* footer */}
      <Footer value="Copyright &#169; 2023 - Develop By Adrian" />
    </>
  );
};

export default PageTemplate;

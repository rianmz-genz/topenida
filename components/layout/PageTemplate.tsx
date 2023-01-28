import Head from "next/head";
import React, { FC, ReactNode } from "react";

const PageTemplate: FC<PageProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Topenida - {title}</title>
        <meta
          name="description"
          content="Topenida adalah website yang menyediakan jasa untuk traveling ke pulau bali."
        />
        <meta
          name="title"
          content="Topenida"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <main className="w-full h-full min-h-screen bg-background flex justify-center pb-4">
        <section className="w-full max-w-[470px] bg-white min-h-screen h-fit">
          {children}
        </section>
      </main>
    </>
  );
};

export default PageTemplate;

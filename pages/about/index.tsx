import MainLayout from "@/components/Layout/MainLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>About Page</h1>
      <h3>
        Ir a <Link href="/">Home</Link>
      </h3>
    </>
  );
};

AboutPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default AboutPage;

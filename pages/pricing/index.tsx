import MainLayout from "@/components/Layout/MainLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const PrincingPage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Pricing Page</h1>
      <h3>
        Ir a <Link href="/">Home</Link>
      </h3>
    </>
  );
};

PrincingPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default PrincingPage;

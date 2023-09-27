import MainLayout from "@/components/Layout/MainLayout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h3>
        Ir a <Link href="/about">About</Link>
      </h3>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default HomePage;

import MainLayout from "@/components/Layout/MainLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";

const Contacts: NextPageWithLayout = () => {
  return (
    <>
      <h1>Contact Page</h1>
      <h3>
        Ir a <Link href="/">Home</Link>
      </h3>
    </>
  );
};

Contacts.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Contacts;

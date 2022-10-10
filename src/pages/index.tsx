import { FetchImages } from "@/components/FetchImages";
import { Layout } from "@/components/Layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Image Search</title>
      </Head>
      <FetchImages />
    </Layout>
  );
};

export default Home;

import React from "react";
import Head from "../components/head";
import { Layout } from "../components/Layout";


const IndexPage = () => {
  return <div>
    <Layout>
      <Head title="Home"/>
      <div>HELLO!</div>
      <h2>Something else</h2>
    </Layout>
  </div>
}

export default IndexPage
import { Link } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import { Layout } from '../components/Layout';

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About"/>
            <h1>ABOUT PAGE!</h1>
            <p>about us...</p>
            <Link to="/contact">Contact us!</Link>
            </Layout>
        </div>
    )
}

export default AboutPage
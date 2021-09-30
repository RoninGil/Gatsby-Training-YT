import { Link } from 'gatsby'
import React from 'react'
import Head from '../components/head'
import { Layout } from '../components/Layout'

const NotFound = () => {
    return (
        <div>
            <Layout>
            <Head title="404 Not found"/>
                <p>FILE NOT FOUND ): <Link to='/'>Head Home</Link></p>
            </Layout>
        </div>
    )
}

export default NotFound
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import { Layout } from '../components/Layout';
import * as styles from './blog.module.scss';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(sort: {
          fields: publishedDate,
          order: DESC
        }){
          edges{
            node{
                id
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `)
    return (
        <div>
            <Layout>
            <Head title="Blogs"/>
            <h1>Blog Page component!</h1>
            <p>POSTS WILL SHOW UP HERE</p>
            <ol className={styles.posts}>
                {
                    data.allContentfulBlogPost.edges.map(post => {
                        return <li className={styles.post} key={post.node.id}>
                            <Link to={`/blog/${post.node.slug}`}>
                              <h2>{post.node.title} </h2>
                              <p>{post.node.publishedDate}</p>
                            </Link>
                        </li>
                    })
                }
            </ol>
            </Layout>
        </div>
    )
}

export default BlogPage
import { graphql } from 'gatsby'
import React from 'react'
import { Layout } from '../components/Layout'
import {renderRichText} from 'gatsby-source-contentful/rich-text'
import Head from '../components/head'


/// A PARTIR DE REFERENCES ES PARA OBTENER LA IMAGEN DE CONTENTFUL (EL ASSET)
export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug: {
    eq: $slug
  }){
    title
    publishedDate
    id
    postBody{
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          __typename
          fixed(width: 1600) {
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
}
`
const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
           <>
            {/* <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre> */}
            <img
              src={node.data.target.fixed.src}
              alt={node.data.target.title}
            />
          </>
        )
      }
    }
  }

    console.log(props)
    return (
        <Layout>
          <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {props.data.contentfulBlogPost.postBody&&renderRichText(props.data.contentfulBlogPost.postBody, options)}
        </Layout>
    )
}

export default Blog
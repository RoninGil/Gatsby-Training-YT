import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import * as styles from './footer.module.scss';

export const Footer = () => {

    const data = useStaticQuery(graphql`
    query{
        site{
        siteMetadata{
          author
        }
      }
    }
    `)

    return (
        <div className={styles.footer}>
            Created by {data.site.siteMetadata.author} - 2021
        </div>
    )
}


export default Footer;
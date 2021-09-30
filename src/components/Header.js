import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import * as styles from './header.module.scss'

export const Header = () => {

    const data = useStaticQuery(graphql`
    query{
        site{
        siteMetadata{
          title
        }
      }
    }
    `)
    console.log(data)
    return (
        <div className={styles.header}>
            <h1>
                <Link className={styles.title} to='/'>{data.site.siteMetadata.title}</Link>
            </h1>
                <ul className={styles.navList}>
                    <li><Link className={styles.navItem} to="/"> Home</Link></li>
                    <li><Link className={styles.navItem}  to="/blog"> Blog</Link></li>
                    <li><Link className={styles.navItem}  to="/contact"> Contact</Link></li>
                    <li><Link className={styles.navItem}  to="/about"> About</Link></li>
                </ul>
                    
        </div>
    )
}

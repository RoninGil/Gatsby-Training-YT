import React from 'react'
import Footer from './Footer'
import { Header } from './Header'
import '../styles/index.scss'
import * as styles from './layout.module.scss'

export const Layout = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}> 
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

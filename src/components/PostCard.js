import React from 'react'
import Image from 'gatsby-image'
import styles from '../css/postcard.module.css'
import {Link} from 'gatsby'

const PostCard = ({post}) => {
    console.log(post);
    
    //destructuring
    const {title, date, author, slug} = post.frontmatter;

    //we need this particular property for the Gatsby image
    const img = post.frontmatter.image.childImageSharp.fluid;

    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <Image fluid={img} />
            </div>
            <div className={styles.info}>
                <h2>{title}</h2>
                <h6>
                    <span>by {author}</span> / <span>{date}</span>
                    <Link to={slug} className={styles.link}>read more</Link>
                </h6>

            </div>
        </article>
    )
}

export default PostCard

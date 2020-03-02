import React from 'react'
import PostCard from './PostCard'
import styles from '../css/postlist.module.css'                    

const PostList = ({posts}) => {
    console.log(posts);

    return (
        <section className={styles.posts}>
            <div className={styles.center}>
                {posts.map(({node}, index)=>{
                    //returns postCard info for the postcard component
                    return <PostCard key={index} post={node} />
                })}
            </div>

        </section>
    )
}

export default PostList

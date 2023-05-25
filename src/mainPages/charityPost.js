import React , { useEffect } from 'react';
import PostCard from "../components/PostsPage/common/PostCard"

const CharityPost = ( { posts } ) => {
    useEffect ( () => {
        console.log ( posts )
    } , [] )

    return (
        <>

            {/*{ posts.map ( item =>*/}
            {/*    // <PostCard posts={ item } key={ item.id }/>*/}
            {/*) }*/}
        </>
    );
};

export default CharityPost;
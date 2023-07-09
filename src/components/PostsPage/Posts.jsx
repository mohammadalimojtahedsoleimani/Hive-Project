import PostCard from "./common/PostCard";
import styles from "./Posts.module.css";
import { useContext, useEffect, useState } from "react";
// import { SearchContext } from "../../../context/SearchContext";

const Posts = (props) => {
  // const { search, setSearch } = useContext(SearchContext);

  const setPosts = (posts, page) => {
    //searchedCharity.map 0 1 2 3
    //     image: string;
    //   name: string;
    //   date: string;
    //   title: string;
    //   description: string;
    //   collected: number;
    //   target: number;

    // }

    // const PostCard
    // if (page * 4 > posts.length) {
    //   return posts
    //     .slice((page - 1) * 4)
    //     .map((post) => (
    //       <PostCard
    //         key={post.id}
    //         image={post.image}
    //         name={post.name}
    //         date={post.date}
    //         title={post.title}
    //         description={post.description}
    //         collected={post.collected}
    //         target={post.target}
    //       />
    //     ));
    // }
    return (
      posts
        // .slice((page - 1) * 4, page * 4)
        .map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            image={post.image}
            name={post.raiser_full_name}
            date={post.published_date}
            title={post.title}
            description={post.snippet}
            collected={post.collected_amount}
            target={post.estimated_amount}
            collected_percentage = { post.collected_percentage}
          />
        ))
    );
  };
  // const postsType1 = (posts) => {
  //   return (
  //     <div className={styles.parent}>
  //       <div className={styles.type1_right}>
  //         {setPosts(posts, 0, 4, 50, 15)}
  //       </div>
  //       <div className={styles.type1_left}>
  //         {setPosts(posts, 4, 5, 100, 30)}
  //       </div>
  //     </div>
  //   );
  // };
  // const postsType2 = (posts) => {
  //   return (
  //     <div className={styles.parent}>
  //       <div className={styles.type2_right}>
  //         {setPosts(posts, 0, 2, 100, 15)}
  //       </div>
  //       <div className={styles.type2_center}>
  //         {setPosts(posts, 2, 3, 100, 30)}
  //       </div>
  //       <div className={styles.type2_left}>
  //         {setPosts(posts, 3, 5, 100, 15)}
  //       </div>
  //     </div>
  //   );
  // };
  // const postsType3 = (posts) => {
  //   return (
  //     <div className={styles.parent}>
  //       <div className={styles.type3_right}>
  //         {setPosts(posts, 0, 1, 100, 30)}
  //       </div>
  //       <div className={styles.type3_left}>{setPosts(posts, 1, 5, 50, 15)}</div>
  //     </div>
  //   );
  // };
  // const handlePosts = (posts: []) => {
  //   let result = [];
  //   if (posts.length - 5 < 0) {
  //     return [
  //       <div className={styles.parent}>
  //         {setPosts(posts, 0, posts.length, 25)}
  //       </div>,
  //     ];
  //   }
  //   for (let i = 0; i < posts.length; i = i + 5) {
  //     if (i + 5 <= posts.length) {
  //       if (i % 5 === 0) {
  //         console.log(i / 5);
  //         console.log((i / 5) % 3);
  //         switch ((i / 5) % 3) {
  //           case 0:
  //             result.push(postsType1(posts.slice(i, i + 5)));
  //             break;
  //           case 1:
  //             result.push(postsType2(posts.slice(i, i + 5)));
  //             break;
  //           default:
  //             result.push(postsType3(posts.slice(i, i + 5)));
  //             break;
  //         }
  //       }
  //     } else {
  //       console.log("heree");
  //       result.push(
  //         <div className={styles.parent}>
  //           {setPosts(posts, i, posts.length, 25)}
  //         </div>
  //       );
  //       return result;
  //     }
  //   }
  //   return result;
  // };
  return (
    <div className={styles.posts + " px-[6rem] xxl:px-[9rem] mb-[8rem]"}>
      {setPosts(props.posts, props.page)}
    </div>
  );
};

export default Posts;

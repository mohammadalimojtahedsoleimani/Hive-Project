import PostCard from "./common/PostCard";
import styles from "./Posts.module.css";

const Posts = (props) => {
  const setPosts = (posts, page) => {
    return posts.map((post) => (
      <PostCard
        key={post.id}
        id={post.id}
        image={post.image}
        name={post.raiser_full_name}
        categoryName={post.category.name}
        date={post.published_date}
        title={post.title}
        description={post.snippet}
        collected={post.collected_amount}
        target={post.estimated_amount}
        collectedPercentage={post.collected_percentage}
      />
    ));
  };

  return (
    <div
      className={
        styles.posts + " flex justify-start px-[5rem] xxl:px-[9rem] mb-[6rem]"
      }
    >
      {setPosts(props.posts, props.page)}
    </div>
  );
};

export default Posts;

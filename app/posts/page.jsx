import PostCard from "@/components/PostCard";
import "./Posts.css";

async function loadPages() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return data;
}

async function PostPages() {
  const posts = await loadPages();

  // console.log(posts);

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}

export default PostPages;

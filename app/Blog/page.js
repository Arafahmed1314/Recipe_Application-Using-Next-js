// "use client"; // Mark as Client Component

import BlogHeader from "./BlogHeader";
import LikeMore from "./LikeMore";
import BlogDetails from "./BlogDetails";


function Blog() {
  // const router = useRouter();

  // // `useRouter.query` is unavailable in App Router. You need to use `useParams` or pass props from Server Component.
  // const category_id = router.query?.category_id || "";
  // console.log(category_id);

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mt-20">
        <BlogHeader />
        <BlogDetails />
      </article>
      <LikeMore />
    </main>
  );
}

export default Blog;

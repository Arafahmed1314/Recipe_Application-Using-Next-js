// "use client"; // Mark as Client Component

import BlogHeader from "../BlogHeader";
import LikeMore from "../LikeMore";
import BlogDetails from "../BlogDetails";


function Blog({ params }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mt-20">
        <BlogHeader id={params.id} />
        <BlogDetails />
      </article>
      <LikeMore id={params.id} />
    </main>
  );
}

export default Blog;

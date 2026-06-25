import PostCard from "./PostCard";

const posts = [
  { id: 1, image: "/post1.jpg", isNew: true, tags: ["Google", "Trending", "New"], title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 },
  { id: 2, image: "/post2.jpg", isNew: true, tags: ["Google", "Trending", "New"], title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 },
  { id: 3, image: "/post3.jpg", isNew: true, tags: ["Google", "Trending", "New"], title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 },
];

function FeaturedPosts() {
  return (
    <section className="w-full px-6 py-12 md:px-[195px] md:py-24">
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <span className="text-sm font-bold text-[#23A6F0]">Practice Advice</span>
        <h2 className="text-4xl font-bold text-[#252B42]">Featured Posts</h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between
          <br className="hidden md:block" />
          the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedPosts;
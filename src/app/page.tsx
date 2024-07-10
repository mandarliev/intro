import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/34eee9f9-d35d-4d82-b40f-97c8c01e9a78-5t1h16.webp",
  "https://utfs.io/f/4a2bda1f-0a40-4475-9ce9-aef5ea8353cd-cbcgsf.webp",
  "https://utfs.io/f/95e429f4-e850-4578-9367-14b75583420e-lcarte.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

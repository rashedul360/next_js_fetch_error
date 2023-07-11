const createPost = async (title, body, slug) => {
 const posts = await fetch("http://localhost:3000/api/post", {
  method: "POST",
  body: JSON.stringify({
   title,
   body,
   slug,
  }),
 });

 return posts;
};

// async function getPosts() {
//  // const res = await fetch("http://localhost:3000/api/post/sd");
//  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//  if (!res.ok) {
//   // This will activate the closest `error.js` Error Boundary
//   throw new Error("Failed to fetch data");
//  }

//  return res.json();
// }
export const getPosts = async () => {
 const res = await fetch("http://localhost:3000/api/post");
 return await res.json();
};

const HomePage = async () => {
 const posts = (await getPosts()) || [];

 return (
  <div>
   <h1 className="text-2xl">Hello</h1>
   {posts?.map((post) => (
    <h1>{post?._id}</h1>
   ))}
  </div>
 );
};

export default HomePage;

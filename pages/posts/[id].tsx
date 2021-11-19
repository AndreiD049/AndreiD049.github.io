interface Post {
  title: string;
  description: string;
  author: string;
}

interface Params {
  id: string;
}

const posts: Post[] = [
  {
    author: "andrei",
    title: "my-cat",
    description: "...",
  },
  {
    author: "andrei",
    title: "My dog",
    description: "...",
  },
];

export default function Post({ post }: { post: Post }) {
  return (
    <main>
      <article>
        <h5>{post.title}</h5>
        <p>{post.description}</p>
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((p) => ({
    params: {
      id: p.title,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  return {
    props: { post: posts.find((p) => p.title === params.id) }
  };
}

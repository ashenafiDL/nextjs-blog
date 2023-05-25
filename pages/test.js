export default function Test({ value }) {
  return <div>{value}</div>;
}

export async function getStaticProps(context) {
  const res = await fetch("http://127.0.0.1:3000/cats/7", { method: "GET" });
  const data = await res.body;

  if (!data) {
    throw new Error("no bueno");
  }

  return {
    props: {
      data,
    },
  };
}

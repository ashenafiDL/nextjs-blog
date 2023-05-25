import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Nextjs Blog</title>
      </Head>
      <div className="flex w-full flex-col items-center justify-center">
        <header className="my-8 flex flex-col items-center">
          <Image
            className="my-8 rounded-full"
            src="/images/profile.jpg"
            alt="Profile"
            width={144}
            height={144}
          />
          <h3 className="text-5xl font-extrabold">Your Name</h3>
        </header>
        <section>
          <div>
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div id="blog-posts">
            <div className="flex flex-row justify-between">
              <h5 className="text-2xl font-bold">Blogs</h5>
              <Link href="/posts/new-post">
                <button className="cursor-pointer">➕ Add New</button>
              </Link>
            </div>
            {allPostsData.map(({ id, title, date }) => (
              <li className="list-none py-1" key={id}>
                <Link href={"posts/" + id}>
                  <p className="text-xl font-bold text-blue-500">{title}</p>
                </Link>
                <span>
                  <Date dateString={date} />
                </span>
              </li>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

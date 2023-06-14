import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { Comments } from "./comments/comments";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{"Nextjs Blog" + " - " + postData.id}</title>
      </Head>
      <Link className="text-blue-500" href={"/"}>
        ⬅ Back to home
      </Link>
      <div>
        <div className="pb-2">
          <h1 className="text-3xl">{postData.title}</h1>
          <span className="text-gray-400">
            <Date dateString={postData.date} />
          </span>
        </div>
        {/* FIXME - fix the way the markdown is displayed */}
        <div
          className="prose prose-slate dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
      {/* TODO - add like and share also */}
      <Comments />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

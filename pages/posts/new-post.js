import dynamic from "next/dynamic";
import { useState } from "react";
import Layout from "../../components/layout";

// FIXME - fix the new post editor
let CustomEditor = dynamic(() => import("../../components/customEditor"), {
  ssr: false,
});

const New = () => {
  const [editorInstance, setEditorInstance] = useState({});

  const handleInstance = (instance) => {
    setEditorInstance(instance);
  };

  return (
    <Layout>
      <button>Save</button>
      {CustomEditor && <CustomEditor handleInstance={handleInstance} />}
    </Layout>
  );
};

export default New;

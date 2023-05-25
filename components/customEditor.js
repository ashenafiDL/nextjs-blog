import EditorJS from "@editorjs/editorjs";

const CustomEditor = ({ data, handleInstance }) => {
  return (
    <EditorJS
      instanceRef={(instance) => handleInstance(instance)}
      data={data}
      placeholder="start writing..."
    />
  );
};

export default CustomEditor;

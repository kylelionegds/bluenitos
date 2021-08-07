import { Text } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { Editor } from "../../modules/challenge/components/Editor";

const Challenge = () => {
  return (
    <Layout title="Challenge">
      <Editor onChange={() => {}} />
    </Layout>
  );
};

export default Challenge;

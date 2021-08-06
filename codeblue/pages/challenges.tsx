import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import React from "react";
import { Layout } from "../components/Layout";
import { useGetChallenges } from "../hooks/useChallenges";
import { ApplicationPaths } from "../types";
import { TOKEN_KEY } from "../utils/authenticated";

const Challenges = () => {
  const { data, isLoading, isSuccess } = useGetChallenges();

  return (
    <Layout title="desafios" currentPath="challenges">
      {" "}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN_KEY]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: ApplicationPaths.START,
        permanent: false,
      },
    };
  }

  return {
    props: { token: token },
  };
};

export default Challenges;

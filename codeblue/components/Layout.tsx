import Head from "next/head";
import React, { ReactNode } from "react";

import { Flex, Heading } from "@chakra-ui/react";

import { Paths } from "../types";
import { SideNav } from "./SideNav";

interface LayoutProps {
  title: string;
  currentPath: Paths;
  children: ReactNode;
}

export function Layout({ title, currentPath, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex w="100%" minH="100vh" bg="brand.300">
        <SideNav currentPath={currentPath} />
        <Flex p="8" w="85%" h="100%" flexDirection="column">
          <Heading
            w="100%"
            fontFamily="Roboto Mono"
            color="brand.800"
            textShadow="4px 4px #1E1A28"
          >
            _{title}
          </Heading>
          {children}
        </Flex>
      </Flex>
    </>
  );
}

import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import MainHeader from "../layout/MainHeader";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <MainHeader />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

import React from "react";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import {
  Box,
  Heading,
  Image,
  Text,
  Tag,
  Flex,
  Divider,
} from "@chakra-ui/react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import BaseLayout from "../../components/Wrapper/BaseLayout";
import BaseText from "../../components/Wrapper/BaseText";
import Footer from "../../components/Footer";

const BlogPage = (blogsData) => {
  return (
    <React.Fragment>
      <Box>
        <Seo />
      </Box>
      <Box>
        <header>
          <Header />
        </header>
      </Box>
      <main>
        <BaseLayout>
          <BaseText
            firstTitle="Technical"
            secondTitle="Writer"
            textIcon="https://ik.imagekit.io/ayushsoni1010/Website/blogs?ik-sdk-version=javascript-1.4.3&updatedAt=1669666499904"
            topSpacing="2"
          />
          <Box>
            <Box>
              <Box align="center">
                <Image src={blogsData.cover_image} alt={blogsData.slug} />
              </Box>
              <Heading
                fontSize={{
                  base: "5xl",
                  lg: "5xl",
                  md: "5xl",
                  sm: "3xl",
                  xs: "3xl",
                }}
                fontWeight="800"
                my="2"
              >
                {blogsData.title}
              </Heading>
              <Flex gap="3" my="3" flexWrap="wrap">
                {blogsData.tags.split(", ").map((item, index) => {
                  return (
                    <Tag key={index} cursor="pointer">
                      {item}
                    </Tag>
                  );
                })}
              </Flex>
              <Text>{blogsData.date}</Text>
            </Box>
            <Divider my="4" />
            <Box my="4">
              <div
                dangerouslySetInnerHTML={{ __html: blogsData.contentHtml }}
              />
            </Box>
          </Box>
        </BaseLayout>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const matterResult = matter(markdown);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      ...matterResult.data,
      slug,
      contentHtml,
    },
  };
}

export default BlogPage;

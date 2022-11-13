import React from "react";
import Image from "next/image";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import BaseLayout from "../Wrapper/BaseLayout";
import BaseText from "../Wrapper/BaseText";
import { skillDetails } from "./__skillsDetails";

const Skills = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <BaseText
          firstTitle="Skills"
          secondTitle="Languages"
          textIcon="https://ik.imagekit.io/ayushsoni1010/Website/featured-timeline_mfh--P4f5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667325001664"
          spacing="14"
        />
        <Box boxShadow="2xl" borderRadius="3xl" my="10">
          <marquee behavior="slide" loop truespeed="60" direction="left">
            <Flex
              gap={{ base: 16, lg: 16, md: 16, sm: 14, xs: 10 }}
              wrap="wrap"
              p={{ base: 10, lg: 10, md: 10, sm: 10, xs: 0 }}
              my={{ base: 0, lg: 0, md: 0, sm: 4, xs: 10 }}
              alignItems="center"
              justify="center"
            >
              {skillDetails.map((item) => (
                <Box key={item.key}>
                  <Image
                    width="70"
                    height="70"
                    src={item.iconURL}
                    alt={item.name}
                    aria-label={item.name}
                  />
                </Box>
              ))}
            </Flex>
          </marquee>
        </Box>
      </BaseLayout>
    </React.Fragment>
  );
};
export default Skills;
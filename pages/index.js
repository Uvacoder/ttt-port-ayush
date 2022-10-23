import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import VoxelDogLoader from "../components/DevDog/voxel-dog";

const LazyVoxelDog = dynamic(() => import("../components/DevDog/index"), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayush Soni | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
        <LazyVoxelDog />
      </Box>
    </div>
  );
}

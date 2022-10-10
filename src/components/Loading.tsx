import { Grid, GridItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Grid
      maxW="8xl"
      mx="auto"
      mt="40px"
      templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
      gap="10px"
      px="20px"
    >
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
      <GridItem>
        <Skeleton h="300px"></Skeleton>
        <SkeletonText maxW="250px"></SkeletonText>
      </GridItem>
    </Grid>
  );
};

export default Loading;

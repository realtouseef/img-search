import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { FetchedImagesType } from "@/types/types";
import Image from "next/image";

const url = `${process.env.NEXT_PUBLIC_API_URL}?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`;

export const FetchImages = () => {
  const { data, isLoading } = useQuery(["images"], () => {
    return fetch(url).then((res) => res.json());
  });
  if (isLoading) return <Loading />;
  return (
    <Grid
      maxW="8xl"
      mx="auto"
      mt="40px"
      templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
      gap="10px"
      px="20px"
    >
      {data.map(({ id, urls, likes, user }: FetchedImagesType) => {
        return (
          <GridItem key={id} maxW="250px">
            <Image
              src={urls.regular}
              alt={user.name}
              width={300}
              height={300}
              objectFit="cover"
            />
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold">by {user.name}</Text>
              <Text>Likes: {likes}</Text>
            </Flex>
          </GridItem>
        );
      })}
    </Grid>
  );
};

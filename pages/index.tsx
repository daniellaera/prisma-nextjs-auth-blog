import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import React from "react";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/system";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { Avatar, Spinner } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";

const FeedQuery = gql`
  query FeedQuery {
    feed {
      id
      createdAt
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`

interface BlogAuthorPost {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorPost> = (props) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (loading) {
    return (
      <Stack direction="row" spacing={4}>
        <Spinner size="lg" />
      </Stack>
    );
  }

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Avatar
        src={session?.user.image}
        size="sm"
        name="Daniel Laera"
        ml={-1}
        mr={2}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      {/* <Text>{props.date.toLocaleDateString()}</Text> */}
      <Text>{props.date}</Text>
    </HStack>
  );
};

const Blog = () => {
  const { loading, error, data } = useQuery(FeedQuery, {
    fetchPolicy: "cache-and-network",
  })

  const color = useColorModeValue("gray.700", "gray.200");
  const bgColor = useColorModeValue("blue.50", "blue.900")

  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <Layout>
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={bgColor}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              {data.feed.length !== 0 ? "Public Feed" : "No Feed"}
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {data.feed.map((post) => (
        <Container
          key={post.id}
          maxW="container.xl"
          onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
        >
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <Heading marginTop="1">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {post.title}
                </Link>
              </Heading>
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Text as="p" marginTop="2" color={color} fontSize="lg">
                  {post.content}
                </Text>
              </Link>
              <BlogAuthor name={post.author.name} date={post.createdAt} />
            </Box>
          </Box>
          <Divider marginTop="5" />
        </Container>
      ))}
    </Layout>
  );
};

export default Blog;
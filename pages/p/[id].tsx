import React, { useRef, useState } from "react";
import { GetServerSideProps } from "next";
import Router, { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Button } from "@chakra-ui/button";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useToast } from "@chakra-ui/toast";
import {
  Avatar,
  Box,
  Container,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";
import prisma from "../../lib/prisma";
import { gql, useQuery } from "@apollo/client";

const PostQuery = gql`
  query PostQuery($postId: String!) {
    post(postId: $postId) {
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

async function deletePost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/");
}

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  createdAt: Date;
};

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) {
    return <div>Loading ...</div>;
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

const Post: React.FC<PostProps> = (props) => {
  const postId = useRouter().query.id

  // TODO: we should find a method for loading
  const { loading: loader, error, data } = useQuery(PostQuery, {
    variables: { postId },
  })

  const { data: session, status } = useSession();
  const loading = status === "loading";

  const color = useColorModeValue("gray.700", "gray.200");

  const toast = useToast();
  const [isDelete, setIsDelete] = useState(false);
  const onCloseDelete = () => setIsDelete(false);
  const [isPublish, setIsPublish] = useState(false);
  const onClosePublish = () => setIsPublish(false);
  const cancelRef = useRef();

  if (loading) {
    return <div>Authenticating ...</div>;
  }

  if (loader) {
    console.log("loading the useQuery")
    return <div>Loading ...</div>
  }

  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        {/* alert */}
        <AlertDialog
          isOpen={isDelete}
          leastDestructiveRef={cancelRef}
          onClose={onCloseDelete}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Post
              </AlertDialogHeader>

              <AlertDialogBody>
                {`Are you sure? You can't undo this action afterwards.`}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onCloseDelete}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deletePost(props.id),
                      toast({
                        title: "Post deleted.",
                        description: "We've delete your post.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>{" "}
        <AlertDialog
          isOpen={isPublish}
          leastDestructiveRef={cancelRef}
          onClose={onClosePublish}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Publish Post
              </AlertDialogHeader>

              <AlertDialogBody>
                {`Are you sure? You can't undo this action afterwards.`}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClosePublish}>
                  Cancel
                </Button>
                <Button
                  colorScheme="linkedin"
                  onClick={() => {
                    publishPost(props.id),
                      toast({
                        title: "Post published.",
                        description: "We've published your post for you.",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });
                  }}
                  ml={3}
                >
                  Publish
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        {/* end of alerts */}
        <Container maxW="container.xl">
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
                  {title}
                </Link>
              </Heading>
              <Text as="p" marginTop="2" color={color} fontSize="lg">
                {props.content}
              </Text>
              <BlogAuthor name={data.post.author.name} date={data.post.createdAt} />

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Stack direction="row" spacing={4}>
                  {!props.published &&
                    userHasValidSession &&
                    postBelongsToUser && (
                      <Button
                        type="submit"
                        leftIcon={<CheckCircleIcon />}
                        colorScheme="linkedin"
                        variant="solid"
                        onClick={() => setIsPublish(true)}
                      >
                        Publish
                      </Button>
                    )}
                  {userHasValidSession && postBelongsToUser && (
                    <Button
                      leftIcon={<DeleteIcon />}
                      colorScheme="red"
                      variant="solid"
                      onClick={() => setIsDelete(true)}
                    >
                      Delete
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

export default Post;
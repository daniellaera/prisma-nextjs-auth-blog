import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import Layout from "../components/Layout";

const Post = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const color = useColorModeValue("gray.50", "gray.800");
  const color2 = useColorModeValue("white", "gray.700");

  if (loading) {
    return <div>Loading...</div>;
  }

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch(`http://localhost:3000/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.log(error);
    }
  };

  if (!session) {
    return (
      <Layout>
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={color}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to create posts <ChakraLink color={"blue.400"}></ChakraLink> ✌️
              </Text>
            </Stack>
          </Stack>
        </Flex>
      </Layout>
    );
  }

  return (
    <Layout>
      <Stack spacing={8} mx={"auto"}>
        <form onSubmit={submitData}>
          <Stack align={"center"}>
            {/* <Heading fontSize={"4xl"}>Create new post</Heading> */}
            <Text fontSize={"lg"} color={"gray.600"}>
              Create a new post ✌️
            </Text>
          </Stack>
          <Box rounded={"lg"} bg={color2} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="title">
                <Input
                  autoFocus
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  type="text"
                  value={title}
                />
              </FormControl>
              <FormControl id="description">
                <Textarea
                  cols={50}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content"
                  rows={8}
                  value={content}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Stack direction="row" spacing={4}>
                  <Button
                    disabled={!content || !title}
                    type="submit"
                    leftIcon={<CheckCircleIcon />}
                    colorScheme="linkedin"
                    variant="solid"
                    onClick={() =>
                      toast({
                        title: "Post created.",
                        description: "We've created your post for you.",
                        status: "info",
                        duration: 5000,
                        isClosable: true,
                      })
                    }
                  >
                    Create
                  </Button>
                  <Link passHref href="/">
                    <Button
                      leftIcon={<CloseIcon />}
                      colorScheme="red"
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Layout>
  );
};

export default Post;

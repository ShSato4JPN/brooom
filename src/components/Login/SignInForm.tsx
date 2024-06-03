import React from "react";

import { Button, Flex, Heading, Input } from "@chakra-ui/react";

export default function LoginForm() {
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        width={800}
        bg={"gray.100"}
        p={12}
        rounded={10}
        direction={"column"}
        w={[300, 400, 500]}
        h={[300, 400, 500]}
      >
        <Heading mb={6}>Log in</Heading>
        <Input placeholder={"email"} variant={"filled"} mb={3} type="email" />
        <Input
          placeholder={"*******"}
          variant={"filled"}
          mb={3}
          type="password"
        />
        <Button colorScheme={"teal"}>Log in</Button>
      </Flex>
    </Flex>
  );
}

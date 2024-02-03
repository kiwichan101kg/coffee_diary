import React from "react";
import BasicInfoInput from "./BasicInfoInput";
import CharacteristicsInput from "./CharacteristicsInput";
import Container from "@/app/components/Container";
import PostBody from "@/app/components/PostBody";

const page = () => {
  return (
    <>
      <Container>
        <PostBody>
          <BasicInfoInput />
          <CharacteristicsInput />
        </PostBody>
      </Container>
    </>
  );
};

export default page;

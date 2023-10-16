import React from "react";
import BasicInfoInput from "./BasicInfoInput";
import CharacteristicsInput from "./CharacteristicsInput";
import Container from "@/app/components/Container";

const page = () => {
  return (
    <>
      <Container>
        <BasicInfoInput />
        <CharacteristicsInput />
      </Container>
    </>
  );
};

export default page;

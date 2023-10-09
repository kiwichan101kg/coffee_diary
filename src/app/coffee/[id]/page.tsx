import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      coffee 詳細
      <p>{params.id}</p>
    </div>
  );
};

export default page;

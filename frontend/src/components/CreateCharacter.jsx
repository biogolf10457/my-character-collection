import React from "react";

const CreateCharacter = () => {
  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
  };
  return (
    <div>
    </div>
  );
};

export default CreateCharacter;

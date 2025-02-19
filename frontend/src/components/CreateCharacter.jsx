import React from "react";

const CreateCharacter = () => {
  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
  };
  return (
    <div>
      <h1>Create Character</h1>
      <form>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </form>
    </div>
  );
};

export default CreateCharacter;

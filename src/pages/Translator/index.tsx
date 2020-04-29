import React, { useState } from "react";
import { Container, AnimationContainer } from "./styles";

import { useForm } from "react-hook-form";

import api from "../../services/api";

const Translator: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [translations, setTranslations] = useState("");

  const onSubmit = async (data: any) => {
    await api.get(`/?translate=${data.number}`).then((response) => {
      setTranslations(response.data.translation);
    });
  };

  return (
    <>
      <Container>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Numbers in English</h1>

            <input
              name="number"
              placeholder="Type a natural number for its translation"
              ref={register}
            />

            <button type="submit">Translate</button>
          </form>

          {translations}
        </AnimationContainer>
      </Container>
    </>
  );
};

export default Translator;

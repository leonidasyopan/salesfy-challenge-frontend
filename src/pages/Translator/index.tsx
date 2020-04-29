import React, { useState } from "react";
import { Container, AnimationContainer } from "./styles";

import { useForm } from "react-hook-form";

import api from "../../services/api";

interface TranslationFormat {
  translation: string;
}

const Translator: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [translations, setTranslations] = useState("");
  const [translationsHistory, setTranslationsHistory] = useState<
    TranslationFormat[]
  >([]);

  const onSubmit = async (data: any) => {
    await api.get(`/?translate=${data.number}`).then((response) => {
      setTranslations(response.data.translation);
      setTranslationsHistory([
        ...translationsHistory,
        {
          translation: response.data.translation,
        },
      ]);
    });
  };

  console.log(translationsHistory);

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

          <div>
            <h2>Former Translations</h2>
            <ul>
              {translationsHistory.map((translation, index) => (
                <li key={index}>{translation.translation}</li>
              ))}
            </ul>
          </div>
        </AnimationContainer>
      </Container>
    </>
  );
};

export default Translator;

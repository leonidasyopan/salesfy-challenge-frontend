import React, { useState, useEffect } from "react";
import { Container, AnimationContainer } from "./styles";

import { useForm } from "react-hook-form";

import api from "../../services/api";

interface TranslationFormat {
  translation: string;
}

const Translator: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [counter, setCounter] = useState(Number);
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

  useEffect(() => {
    setCounter(translationsHistory.length);
  }, [translationsHistory]);

  return (
    <>
      <Container>
        <AnimationContainer>
          <h1>Numbers in English</h1>

          <p>{`There ${
            translationsHistory.length !== 1 ? "are" : "is"
          } ${counter} ${
            translationsHistory.length !== 1 ? "numbers" : "number"
          } translated.`}</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="number"
              name="number"
              placeholder="Natural number"
              ref={register}
            />

            <button type="submit">Translate</button>
          </form>

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

import React, { useState, useEffect } from "react";
import {
  Container,
  AnimationContainerLeft,
  AnimationContainerRight,
} from "./styles";

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
        {
          translation: response.data.translation,
        },
        ...translationsHistory,
      ]);
    });
  };

  useEffect(() => {
    setCounter(translationsHistory.length);
  }, [translationsHistory]);

  return (
    <Container>
      <header>
        <h1>Numbers in English | Translator</h1>
      </header>
      <div id="content">
        <AnimationContainerLeft>
          <section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="number">
                Provide a natural number for translation:
              </label>
              <input type="number" name="number" ref={register} />

              <button type="submit">Translate</button>
            </form>

            <p>Your current translation:</p>
            <div id="current-translation">{translations}</div>
            <h3>{`There ${
              translationsHistory.length !== 1 ? "are" : "is"
            } ${counter} ${
              translationsHistory.length !== 1 ? "numbers" : "number"
            } translated.`}</h3>
          </section>
        </AnimationContainerLeft>
        <AnimationContainerRight>
          <section>
            <div id="translation-history">
              <h2>Former Translations</h2>
              <ul>
                {translationsHistory.length === 0 ? (
                  <li></li>
                ) : (
                  translationsHistory.map((translation, index) => (
                    <li key={index}>{translation.translation}</li>
                  ))
                )}
              </ul>
            </div>
          </section>
        </AnimationContainerRight>
      </div>
      <footer>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </Container>
  );
};

export default Translator;

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

interface NaturalNumbersFormat {
  number: Number;
}

const Translator: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();

  const [counter, setCounter] = useState(Number);
  const [counterTranslation, setCounterTranslation] = useState("");
  const [naturalNumbers, setNaturalNumbers] = useState<NaturalNumbersFormat[]>(
    []
  );
  const [translations, setTranslations] = useState("");
  const [translationsHistory, setTranslationsHistory] = useState<
    TranslationFormat[]
  >([]);

  const onSubmit = async (data: any) => {
    const numberWithCommas = data.number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    setNaturalNumbers([{ number: numberWithCommas }, ...naturalNumbers]);
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
    api.get(`/?translate=${counter}`).then((response) => {
      setCounterTranslation(response.data.translation);
    });
  }, [counter]);

  useEffect(() => {
    setCounter(translationsHistory.length);
  }, [translationsHistory]);

  console.log(counter);

  return (
    <Container>
      <header>
        <h1>Numbers in English</h1>
      </header>
      <div id="content">
        <AnimationContainerLeft>
          <section>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="number">
                Provide a natural number for translation:
              </label>
              <input
                type="number"
                name="number"
                ref={register({ required: true })}
              />
              {errors.number ? (
                <span className="error-message">
                  You need to type a natural number. Please, try again!
                </span>
              ) : (
                <span className="error-message-transparent">No errors</span>
              )}

              <button type="submit">Translate</button>
            </form>

            <p>Your current translation:</p>
            <div id="current-translation">{translations}</div>
            <h3>{`There ${
              translationsHistory.length !== 1 ? "are" : "is"
            } ${counter} (${counterTranslation}) ${
              translationsHistory.length !== 1 ? "numbers" : "number"
            } translated.`}</h3>
          </section>
        </AnimationContainerLeft>
        <AnimationContainerRight>
          <section>
            <h2>Former Translations</h2>
            <div id="translation-history">
              <ul>
                {translationsHistory.length === 0 ? (
                  <li></li>
                ) : (
                  translationsHistory.map((translation, index) => (
                    <li
                      className={
                        Number(counter) === Number(naturalNumbers[index].number)
                          ? "equalToCounter"
                          : "regularLI"
                      }
                      key={index}
                    >
                      {naturalNumbers[index].number} = {translation.translation}
                    </li>
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

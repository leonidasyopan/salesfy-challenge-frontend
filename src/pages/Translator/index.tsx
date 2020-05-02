import React, { useState, useEffect } from "react";
import {
  Container,
  AnimationContainerLeft,
  AnimationContainerRight,
} from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";

// These is the interface for our array of translated words
interface TranslationFormat {
  translation: string;
}

// These is the interface for our array of numbers for the history
interface NaturalNumbersFormat {
  number: Number;
}

const Translator: React.FC = () => {
  // I'm using the useForm dependecy to handle the input
  // It stores all the form related information including
  // function and errors - besides the data
  const { register, handleSubmit, errors } = useForm();

  // Our collection of information for any given session
  const [counter, setCounter] = useState(Number);
  const [counterTranslation, setCounterTranslation] = useState("");
  const [naturalNumbers, setNaturalNumbers] = useState<NaturalNumbersFormat[]>(
    []
  );
  const [translations, setTranslations] = useState("");
  const [translationsHistory, setTranslationsHistory] = useState<
    TranslationFormat[]
  >([]);

  // These is the function that handles everything that happens with the data
  // It receives the data from the input, translates and stores in its variables
  const onSubmit = async (data: any) => {
    // It converts the number into a comma formatted number (ex.: 1,325,752)
    const numberWithCommas = data.number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Here we store the natural number with commas. We're adding the most recent
    // one to the first position instead of last so we can have an inverted
    // history when listing it on screen
    setNaturalNumbers([{ number: numberWithCommas }, ...naturalNumbers]);

    // He we asynchronously access the API to translate the number give by the user
    await api.get(`/?translate=${data.number}`).then((response) => {
      // We then store this number in history (in reversed ordered too), and in
      // our extra variable (used for the current translation).
      setTranslations(response.data.translation);
      setTranslationsHistory([
        {
          translation: response.data.translation,
        },
        ...translationsHistory,
      ]);
    });
  };

  // This useEffect hook here is responsible to translate the counter so we
  // can tell the user how many numbers he has translated already.
  useEffect(() => {
    api.get(`/?translate=${counter}`).then((response) => {
      setCounterTranslation(response.data.translation);
    });
  }, [counter]);

  // This  useEffect hook is responsible to compute and update the couter
  useEffect(() => {
    setCounter(translationsHistory.length);
  }, [translationsHistory]);

  return (
    <Container>
      <header>
        <h1>Numbers in English</h1>
      </header>
      <div id="content">
        {/* Here I'm using a container to animate the entrance of the left
        part of the application */}
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
              {/* Here I'm handling the error (in case te user leave it blank). I 
              included a conditional to keep a transparent message so if a regular
              error message shows up the position of elements don't change */}
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
            {/* I decied to have a condition for the counter, so the grammar
            is correct when we have plurals or sigular (one) */}
            <div id="current-translation">{translations}</div>
            <h3>{`There ${
              translationsHistory.length !== 1 ? "are" : "is"
            } ${counter} (${counterTranslation}) ${
              translationsHistory.length !== 1 ? "numbers" : "number"
            } translated.`}</h3>
          </section>
        </AnimationContainerLeft>
        {/* Here I'm using a container to animate the entrance of the right
        part of the application */}
        <AnimationContainerRight>
          <section>
            <h2>Former Translations</h2>
            <div id="translation-history">
              <ul>
                {/* This conditions is responsible for including and empty list item
                when the user hasn't translated the first number. I believe it looks
                more beautiful this way
                **
                I'm then mapping through the History of Translations array and
                displaying each translation inside a diferent <li>.
                ** 
                There is also a conditional operator to change the class of the item
                in case the number is the same of the one in the counter.
                */}
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
      {/* These empty divs here are only for style purposes. They make the 
      colored boxes on the bottom of the page */}
      <footer>
        <div></div>
        <div></div>
        <div></div>
      </footer>
    </Container>
  );
};

export default Translator;

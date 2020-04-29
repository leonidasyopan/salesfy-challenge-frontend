import React, { useState } from "react";
import { Container, AnimationContainer } from "./styles";

import { useForm } from "react-hook-form";

import api from "../../services/api";

interface TranslationFormat {
  translate: string;
}

const Translator: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [translations, setTranslations] = useState<TranslationFormat[]>([]);

  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(data[0]);
    await api.get(`/?translate=${data.number}`).then((response) => {
      console.log(response.data);
      setTranslations(response.data.translate);
    });

    console.log(translations);
  };

  return (
    <>
      <Container>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Numbers in English</h1>

            <input
              name="number "
              placeholder="Type a natural number for its translation"
              ref={register}
            />

            <button type="submit">Translate</button>
          </form>

          {/* <ul>
            {translations.map((translation) => (
              <li>{translation.translate}</li>
            ))}
          </ul> */}
        </AnimationContainer>
      </Container>
    </>
  );
};

export default Translator;

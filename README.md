<br />
<p align="center">
  <a href="https://leonidasyopan.com/">
    <img src="https://leonidasyopan.com/img/logo-leonidas-yopan.png" alt="Logo Leonidas Yopan" width="300" height="94" target="_blank">
  </a>

  <h3 align="center">Resolução do Desafio Salesfy, etapa Frontend.</h3>

  <p align="center">
    Essa é a minha resolução pessoal para o desafio da Salesfy de criar uma Interface para minha API que recebe qualquer Número Natural (Ex.: 12,135, 759, 185,874, etc...) e traduz (define) ele em Inglês.
    <br />
    <br />
    Mais informações sobre o desenvolvedor:
    <br />
    <a href="https://www.linkedin.com/in/leonidasyopan/" target="_blank">LinkedIn</a>
    ·
    <a href="https://twitter.com/leonidasyopan" target="_blank">Twitter</a>
    ·
    <a href="https://www.facebook.com/leonidasyopan" target="_blank">Facebook</a>
    ·
    <a href="https://leonidasyopan.com/" target="_blank">Portfolio</a>
  </p>
</p>

# Descrição de execução do template da Salesfy

Este é o projeto de desafio Salesfy, etapa Frontend.

Para instalação, rodar o comando:

```
_\$ yarn
```

Para rodar o projeto, execute:

```
_\$ yarn start
```

# Informações sobre como instalar e rodar a Interface com o React

- Após baixar o Repositório instale todas as dependências:

```
yarn install
```

- Para rodar o REACT e abrir em seu Browser execute em um terminal:

```
yarn start
```

- O terminal vai abrir seu browser de preferência (recomendo o Google Chrome) no endereço local:
  **http://localhost:3000/**

<img src="https://raw.githubusercontent.com/leonidasyopan/salesfy-challenge-frontend/master/src/assets/number-translator.png" alt="Visual Representation of the App">

_IMPORTANTE:_ Para que a Interface possa rodar é necessário que sua API esteja rodando em outra porta do LocalHost. Para mais informações sobre a API acesse o repositório da mesma: <a href="https://github.com/leonidasyopan/SalesfyChallengeBackend" target="_blank">API Number Translator</a>.

# Destaques sobre o raciocínio da minha resolução

- Embora tenha apenas uma rota, achei adequado criar uma pasta "routes" para já estar organizado caso surja necessidade de outras rotas no futuro.
- Eu usei o pacote "styled-components para criar toda estilização (CSS) do App. Tenho 2 arquivos para estilo: 1 global onde reseto alguns estilos do CSS que tendem a atrapalhar e 1 onde tenho os estilos específicos do App.
- O App tem suas configurações de acesso a API dentro da pasta "services".
- A main page (única por enquanto) está dentro de uma pasta "pages" criada em preparação para possíveis extensões do aplicativo - fins organizacionais apenas.
- Foi imprescindível o uso dos Hooks useEffect and useState para que as mudanças da página acontecessem.
- Os cuidados com possíveis erros na interação com o usuários são feitos com 1) uso de um input que aceita apenas número (assim ele não consegue inserir palavras), 2) uma mensagem de erro na tela caso o usuário deixe o campo em branco e 3) mensagem automática gerada pelo input type="number" caso o usuário tente inserir decimais.
- O App é responsivo para dispositivos móveis.

Obs.: O arquivo index.ts da página principal possui todos os demais detalhes do raciocínio em comentários.

<!-- LICENSE -->

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Leônidas Yopán - [@leonidasyopan](https://twitter.com/leonidasyopan) - leonidasyopan@gmail.com

LinkedIn: [https://www.linkedin.com/in/leonidasyopan/](https://www.linkedin.com/in/leonidasyopan/)

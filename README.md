# NutriLife React Native App

NutriLife é um aplicativo em React Native que ajuda os usuários a localizar restaurantes veganos e vegetarianos, registrar suas refeições e acessar dicas culinárias. Este README fornece uma visão geral do projeto, instruções de configuração e detalhes adicionais.

## Índice

- [Funcionalidades](#funcionalidades)
- [Algumas Telas do App](#capturas-de-tela)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Navegação](#estrutura-de-navegação)
- [Dependências](#dependências)
- [Licença](#licença)

## Funcionalidades

- Autenticação de usuários (Login e Registro)
- Tela inicial com um mapa mostrando restaurantes veganos e vegetarianos nas proximidades
- Registro e visualização de refeições
- Acesso a dicas culinárias
- Cabeçalho de busca personalizado para fácil navegação
- Navegação em gaveta para fácil acesso a diferentes seções do aplicativo

## Algumas Telas do App

![image](https://github.com/emessonSilva/NutriLife-ReactNative/assets/140443316/4d62b327-6f3e-440b-bac6-0b886f904ed9)
![image](https://github.com/emessonSilva/NutriLife-ReactNative/assets/140443316/7125f46d-56ef-4e44-bf4c-f134d813946a)
![image](https://github.com/emessonSilva/NutriLife-ReactNative/assets/140443316/8d5aa831-5a17-4dcc-bd48-875e79ac9cf5)
![image](https://github.com/emessonSilva/NutriLife-ReactNative/assets/140443316/041141cc-cf93-459f-a558-e5954f111483)
![image](https://github.com/emessonSilva/NutriLife-ReactNative/assets/140443316/6c90362c-641b-46f7-9b75-2f1a164863b7)


## Instalação

Para configurar o projeto localmente, siga estas etapas:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nutrilife-reactnative.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd nutrilife-reactnative
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o projeto:
    ```bash
    npm start
    ```

## Uso

Depois de iniciar o projeto, você pode usar um emulador ou dispositivo físico para visualizar o aplicativo. Siga as instruções exibidas no terminal para abrir o aplicativo no emulador Android, iOS ou no navegador web.

## Estrutura de Navegação

O aplicativo utiliza navegação em pilha (Stack Navigator) e navegação em gaveta (Drawer Navigator) para gerenciar as telas. Aqui está a estrutura de navegação:

- **Stack Navigator (Login):**
  - LoginScreen
  - RegisterScreen
  - MainDrawerScreen

- **Drawer Navigator (MainDrawerScreen):**
  - HomeScreen (com navegação em abas)
    - MapScreen
    - RegisterFoodScreen
    - RegisteredFoodScreen
  - UserProfileScreen
  - CookingTipsScreen
  - LoginScreen (para sair)

## Dependências

Aqui estão algumas das principais dependências usadas no projeto:

- `@react-navigation/native`
- `@react-navigation/stack`
- `@react-navigation/drawer`
- `@react-navigation/bottom-tabs`
- `react-native-maps`
- `expo-location`
- `react-native-vector-icons`

Para ver a lista completa de dependências, consulte o arquivo `package.json`.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

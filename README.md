<p align="center">
<img src=![nlw-esports-logo](https://user-images.githubusercontent.com/96010876/232863123-6222b86b-08b4-418d-8738-5b37534c6f35.svg)
/></p>

<br>

The evolved version of the **Esports** project on the [Next Level Week](https://lp.rocketseat.com.br/nlw) by Rocketseat.

The web client is deployed on Vercel here:

 https://nlw-esports-ignite.vercel.app/

The server is deployed on Fly here: 

https://nlw-esports.fly.dev/games

<hr>

**WORK IN PROGRESS:** Internationalization (i18n), new screens, form validations, unit tests w/ Jest, e2e tests w/ Cypress, pipeline deploy w/ Github Actions.

<hr>
<br>

  - [Description](#description)
  - [Stack and tools](#stack-and-tools)
  - [Quickstart](#quickstart)

<br>

## Description

The project is called *Find your Duo*.
It is a platform to find the perfect partner to play your favorite game together, by connecting your Twitch.tv account.

<p align="center">
<img src=![app-preview](https://user-images.githubusercontent.com/96010876/232863356-3c26419d-19d2-4921-ad69-27be7eab71c5.jpeg) alt="Next Level Week Esports Logo"/></p>

## Stack and tools
* [Node.js](https://nodejs.org/en/)
* [Prisma](https://www.prisma.io/)
* [React](https://reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Figma](https://www.figma.com/)
* [Radix UI](https://www.radix-ui.com/)


## Quickstart

### Server

First, create a new ``.env`` file on the root directory, using the `.env.example` template as base.

Then, to create the local db run:
```sh
$ npm install
$ npm run db:migrate
```

After that, to start the server, run:
```sh
$ npm run dev
```

### Web

To run the local Vite web client:
```sh
$ npm install
$ npm run dev
```



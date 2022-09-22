import express, { request, response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());


app.post('/teste', function (req, res) {
  res.send(req.body)
})


const prisma = new PrismaClient({
  log: ["query"]
});

// primeiro entre na pasta server e
// depois digite no terminal
// npm run dev

// colocar no hoppscotch
// localhost:3333/ads

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

///// POST

app.post('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;
    const body = request.body;

    return response.status(201).json(body);
  });


  

app.get("/games/:id/ads", async (request, response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
      };
    })
  );
});

app.get("/ads/:id/discord", async (request, response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return response.json({
    discord: ad.discord,
  });
});

app.listen(3333);

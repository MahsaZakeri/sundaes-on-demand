import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scopes", (req, res, ctx) => {
    return res();
    ctx.json([
      {
        name: "Chololate",
        imagePath: " /images/chocolate.png",
      },
      {
        name: "Valina",
        imagePath: " /images/valina.png",
      },
    ]);
  }),
];

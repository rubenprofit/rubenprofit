// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const helloWorld = (req: any, res: any) => {
  res.status(200).json({ data: "Hello world" });
};

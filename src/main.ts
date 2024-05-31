import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { Form } from "multiparty";
import crypto from "node:crypto";
import { promisify } from "util";

const app = express();

app.use(bodyParser.json({}));

app.post("/shopier-obs", async (request: Request, response: Response) => {
  const form = new Form();
  const formData = await promisify(form.parse.bind(form))(request);

  const shopierHash = formData.hash[0];
  const res = formData.res[0];
  const data = JSON.parse(Buffer.from(res, "base64").toString("utf-8"));

  const hash = crypto
    .createHmac("sha256", process.env.SHOPIER_OSB_PASSWORD!)
    .update(res + process.env.SHOPIER_OSB_USERNAME)
    .digest("hex");

  if (hash !== shopierHash) {
    response.status(400).send("invalid hash");
  }

  const email = data.email;
  const orderid = data.orderid;
  const currency = data.currency;
  const price = data.price;
  const buyername = data.buyername;
  const buyersurname = data.buyersurname;
  const productcount = data.productcount;
  const productid = data.productid;
  const productlist = data.productlist;
  const chartdetails = data.chartdetails;
  const customernote = data.customernote;
  const istest = data.istest;

  console.log(data);
  res.send("success");
});

const PORT = parseInt(process.env.PORT as string) || 1302;

app.listen(PORT, () => {
  console.log("Project running on", PORT);
});

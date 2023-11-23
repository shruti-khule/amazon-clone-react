const functions=require("firebase-functions");
const express=require("express");
const cors = require("cors");
const stripe=require("stripe")("sk_test_51OAnK1ATRsyOI0Xmk5OtqLIepXefzPggl6D8lMDpnx9u7srGoOECzTSBgyqlrHyee7DLGKa3ZYgEe50fDoVtzpDJ00WjZXBPEA");

const app=express();
const corsMiddleware = cors({
  origin: "https://clone-a7565.web.app",
  credentials: true});
app.use(corsMiddleware);

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payment/create", async (request, response) => {
  const total=request.query.total;
  console.log("payment req received", total);
  const amountInCents = Math.round(total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "eur",
  });

  response.setHeader("Access-Control-Allow-Origin", "https://clone-a7565.web.app");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST");

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});


exports.api=functions.https.onRequest(app);




import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: "price_1SqPDYGMXTzHRJNuO0q58a8n",
          quantity: 1
        }
      ],
          success_url: "https://bavr.vercel.app/success.html",
          cancel_url: "https://bavr.vercel.app/cancel.html",

    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

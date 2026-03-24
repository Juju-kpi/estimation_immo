import { estimatePrice } from "../../lib/estimate"; // chemin relatif correct

export async function POST(req) {
  const body = await req.json();

  const price = estimatePrice(body);

  return Response.json({ price });
}

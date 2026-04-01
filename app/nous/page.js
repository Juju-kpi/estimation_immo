export async function POST(req) {
  const body = await req.json();

  console.log("LEAD:", body);

  return Response.json({ success: true });
}
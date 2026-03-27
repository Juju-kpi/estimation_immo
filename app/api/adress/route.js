export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query || query.length < 3) {
    return Response.json([]);
  }

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&countrycodes=fr&addressdetails=1&limit=5&q=${encodeURIComponent(query)}`,
      {
        headers: {
          "User-Agent": "real-estate-app"
        }
      }
    );

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json([]);
  }
}
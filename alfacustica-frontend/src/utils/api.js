
export async function getProjectImages(
  query = "architecture interior office",
  total = 9,
) {

const CURRENT_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;


  console.log(`[API Request] Buscando: "${query}". Clave activa:`, CURRENT_API_KEY ? "SÍ DETECTADA" : "UNDEFINED");

  const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${total}`,

    {
      method: "GET",
    headers: {
        "Authorization": CURRENT_API_KEY,
    },
    },
);

  if (!response.ok) {
    throw new Error(`Error fetching images: ${response.status}`);
  }

  const data = await response.json();

  return data.photos;
}

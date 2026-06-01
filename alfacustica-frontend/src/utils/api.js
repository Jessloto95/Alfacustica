const API_KEY = import.meta.env.VITE_PREXELS_API_KEY;

export async function getProjectImages(
  query = "architecture interior office",
  total = 9,
) {
  const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${total}`,

    {
    headers: {
        Authorization: API_KEY,
    },
    },
);

  if (!response.ok) {
    throw new Error("Error fetching images");
  }

  const data = await response.json();

  return data.photos;
}

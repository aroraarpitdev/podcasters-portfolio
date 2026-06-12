import mockApiData from "../../mockApiData";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getPageData() {
  try {
    // Attempt to fetch from API
    // We use Promise.all to fetch both endpoints concurrently
    const [pageContentRes, testimonialsRes] = await Promise.all([
      fetch(`${API_BASE_URL}/page-content/home`, { next: { revalidate: 60 } }),
      fetch(`${API_BASE_URL}/testimonials`, { next: { revalidate: 60 } })
    ]);

    if (!pageContentRes.ok || !testimonialsRes.ok) {
      throw new Error("Failed to fetch data from API");
    }

    const pageContent = await pageContentRes.json();
    const testimonials = await testimonialsRes.json();

    // If API returned empty data (e.g. database cleared), fallback to mock data
    if (!pageContent || !pageContent.content) {
      console.warn("API returned empty page content, falling back to mock data");
      return mockApiData;
    }

    // Reconstruct the full data object structure exactly as the frontend expects it
    const data = {
      ...pageContent.content,
      testimonials: {
        ...pageContent.content.testimonials,
        videoCards: testimonials.filter((t: any) => t.type === 'video').map((t: any) => ({
          videoUrl: t.videoUrl,
          videoThumbnail: t.thumbnailUrl,
          videoAuthor: t.author,
          authorBrand: t.brand,
          testimonial: t.content,
          category: t.category,
          cardDirection: t.cardDirection
        })),
        textCards: testimonials.filter((t: any) => t.type === 'text').map((t: any) => ({
          cardHeading: t.content,
          author: t.author,
          rating: t.rating?.toString() || "5",
          category: t.category
        }))
      }
    };
    return data;
  } catch (error) {
    console.error("API Error: Falling back to local mock data.", error);
    // Return local mock data as a robust fallback
    return mockApiData;
  }
}

export async function savePageData(payload: any) {
  const response = await fetch(`${API_BASE_URL}/page-content/home`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to save changes to API");
  }

  return response.json();
}

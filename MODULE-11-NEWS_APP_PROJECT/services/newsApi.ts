import { NEWS_API_BASE_URL, NEWS_API_KEY } from "@/config/config";
import { NewsApiResponse } from "@/types/news";

export interface FetchNewsParams {
  pageSize?: number;
  page?: number;
  category?: string;
  country?: string;
  query?: string;
}

export const fetchTopHeadlines = async (params: FetchNewsParams) => {
  const {
    page = 0,
    pageSize = 20,
    category = "general",
    country = "us",
    query,
  } = params;

  if (!NEWS_API_KEY) {
    throw new Error("News api key not accessible");
  }

  const queryParams = new URLSearchParams({
    apikey: NEWS_API_KEY,
    page: page.toString(),
    pageSize: pageSize.toString(),
    ...(category && category !== "all" && { category }),
    ...(query && { q: query }),
  });

  const url = `${NEWS_API_BASE_URL}/top-headlines?${queryParams.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: NewsApiResponse = await response.json();

    if (data.status === "error") {
      throw new Error(data?.message || "News api send error");
    }

    return data;
  } catch (error) {
    console.error("ERROR : ", error);
    throw error;
  }
};

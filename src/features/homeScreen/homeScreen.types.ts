export interface INew {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface IGetNewsResponse {
  totalArticles: number;
  articles: Array<INew>;
}

export interface IGetNewsRequest {
  search: string;
}

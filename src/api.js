import axios from "axios";

// Axios의 좋은 점은, Axios의 인스턴스를 configure(설정) 해줄 수 있다는 점이다.
// baseURL과 파라미터들을 미리 설정해놓고 중복을 막는다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "1bf672789b8c690173890a9905ec5cbe",
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  //다른 함수와 달리 id를 요구한다.
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      // api_key, language에 더해 append_to_response를 파라미터로 가질 수 있다.
      // 이런 방식은 파라미터를 개별적으로 설정해놓을 수 있다.
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
};

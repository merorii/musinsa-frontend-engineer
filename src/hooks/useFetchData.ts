import axios from "axios";
import { useInfiniteQuery } from "react-query";

import { Character } from "store/types/character";

export interface FetchDataReturnType {
  data: Character[];
  page: number;
}

export const fetchData = async (pageParam: number): Promise<FetchDataReturnType> => {
  const params = {
    page: pageParam,
    pageSize: 10,
  };
  const response = await axios
    .get(process.env.REACT_APP_BASE_URL as string, { params })
    .then((res) => res.data);
  return { data: response, page: Number(pageParam) };
};

export const useFetchData = (page: string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined) => {
  const { data, status, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ["fetchData"],
    async ({ pageParam = page || 1 }) => {
      return await fetchData(pageParam);
    },
    {
      getNextPageParam: (lastPage: FetchDataReturnType) => {
        const nextPage = lastPage.page + 1;
        if (lastPage.data.length < 10 || nextPage > 10) {
          return undefined;
        }
        return nextPage;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  const flatData = data?.pages.map((a) => a.data).flat();
  return { data: flatData, hasNextPage, fetchNextPage, status, isFetching };
};

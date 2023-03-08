import axios from "axios";
import { useInfiniteQuery } from "react-query";

import { Character } from "store/types/character";
import qs from "qs";

export interface FetchReturnType {
  data: Character[];
}

export const fetchData = async (pageParam: number): Promise<FetchReturnType> => {
  const params = {
    page: pageParam,
    pageSize: 10,
  };
  return await axios.get(process.env.REACT_APP_BASE_URL as string, { params }).then((res) => res.data);
};

export const useFetchData = (page: string) => {
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery(
    ["fetchData"],
    async ({ pageParam = page }) => {
      return await fetchData(pageParam);
    },
    {
      getNextPageParam: (lastPage: any, allPage: any) => {
        if (lastPage.total_pages > lastPage.page) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  console.log(status);
  return { data: data?.pages[0], hasNextPage, fetchNextPage, status, isFetching };
};

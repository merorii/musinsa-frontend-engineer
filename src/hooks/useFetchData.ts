import axios from "axios";
import { useInfiniteQuery } from "react-query";

export interface FetchReturnType {
  data: FilteredData[];
}

export interface FilteredData {
  url: string;
  gender: "Female" | "Male";
  name: string;
  tvSeries: Array<string>;
}

export const fetchData = async (pageParam: number): Promise<FetchReturnType> => {
  const params = {
    page: pageParam,
    pageSize: 10,
  };
  return await axios.get(process.env.REACT_APP_BASE_URL as string, { params }).then((res) => res.data);
};

export const useFetchData = () => {
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } = useInfiniteQuery(
    ["fetchData"],
    async ({ pageParam = 1 }) => {
      return await fetchData(pageParam);
    },
    {
      getNextPageParam: (lastPage: any, allPage: any) => {
        console.log(allPage);
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
  return { data: data?.pages[0], hasNextPage, fetchNextPage };
};

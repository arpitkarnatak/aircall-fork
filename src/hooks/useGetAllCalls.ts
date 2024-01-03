import { useQuery } from "react-query";
import { api } from "../helpers/api";
import { ICall } from "../types/call";

export default function useGetAllCalls() {
  const { data, isLoading, isError, isRefetching, refetch, isRefetchError } =
    useQuery<ICall[]>(
      ["all-calls"],
      async () => {
        try {
          const apiResponse = await api.get("/activities");
          const response = await apiResponse.data;
          console.log(response.filter((call: ICall) => call.from));
          return response.filter((call: ICall) => call.from);
        } catch (err) {
          console.error("Error: ", err);
        }
      }
    );
  return {
    data,
    isLoading: isLoading || isRefetching,
    refetch,
    isError: isError || isRefetchError,
  };
}

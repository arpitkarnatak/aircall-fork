import { useQuery } from "react-query";
import { ArchiveSingleCallEvent, api, archiveCallById } from "../helpers/api";
import { ICall } from "../types/call";

export default function useGetCallDetails(callId: string) {
  const { data, isLoading, isError, isRefetching, refetch, isRefetchError } =
    useQuery<ICall>(
      ["call-details", callId],
      async () => {
        try {
          const apiResponse = await api.get(`/activities/${callId}`);
          const response = await apiResponse.data;
          console.log(response);
          return response;
        } catch (err) {
          console.error("Error: ", err);
        }
      },
      {
        onSuccess: async () => {
          await archiveCallById(callId);
          dispatchEvent(ArchiveSingleCallEvent(callId));
        },
      }
    );
  return {
    data,
    isLoading: isLoading || isRefetching,
    refetch,
    isError: isError || isRefetchError,
  };
}

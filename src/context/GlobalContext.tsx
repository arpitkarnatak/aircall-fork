import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { ICall } from "../types/call";
import useGetAllCalls from "../hooks/useGetAllCalls";
import { QueryClient, useQueryClient } from "react-query";

export interface IGlobalContextProvider {
  calls: {
    data: ICall[] | undefined;
    isLoading: boolean;
    isError: boolean;
    refetch: () => Promise<any>;
  };
  queryClient?: QueryClient;
}

export const GlobalContext = createContext<IGlobalContextProvider>({
  calls: {
    data: undefined,
    isLoading: true,
    isError: false,
    refetch: async () => {
      return;
    },
  },
  queryClient: undefined,
});

const handleArchiveAll = () => {
  console.log("Received archive-all event");
  // Perform actions related to the "archive-all" event
};

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const calls = useGetAllCalls();
  const queryClient = useQueryClient();

  function handleUpdate() {
    calls.refetch();
  }

  useEffect(() => {
    addEventListener("archive-all", handleUpdate);
    addEventListener("archive-one", handleUpdate);
    addEventListener("unarchive-all", handleUpdate);
    return () => {
      removeEventListener("archive-all", handleUpdate);
      removeEventListener("archive-one", handleUpdate);
      removeEventListener("unarchive-all", handleUpdate);
    };
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        calls,
        queryClient,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";
import { api } from "../helpers/api";

export default function useArchiveAll() {
  const { calls } = useContext(GlobalContext);
  
  const { isLoading, isError, mutate } = useMutation(
    ["archive-all"],
    async () => {
      try {
        const allCallsArchived =
          calls.data?.filter(calls => !calls.is_archived)?.map(({id}) =>
            api.patch(`/activities/${id}`, {
              is_archived: true,
            })
          ) ?? [];
        await Promise.all(allCallsArchived);
      } catch (err) {
        console.log("Error while archiving: ", err);
      }
    }
  );
  return {
    isLoading,
    isError,
    mutate,
  };
}

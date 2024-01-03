import axios from "axios";

export const BASE_URL = "https://cerulean-marlin-wig.cyclic.app";

// GET - BASE_URL/activities: get calls to display in the Activity Feed
// GET - BASE_URL/activities/<call_id> retrieve a specific call details
// PATCH - BASE_URL/activities/<call_id> update a call. The only field updatable is is_archived (bool). You'll need to send a JSON in the request body:
// {
//   is_archived: true
// }
// PATCH - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

export async function archiveCallById(callId: string) {
  try {
    await api.patch(`/activities/${callId}`, {
      is_archived: true,
    });
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function unarchiveAllCalls() {
  try {
    await api.patch(`/reset`);
  } catch (err) {
    console.log("Error: ", err);
  }
}

export const ArchiveAllCallsEvent = new CustomEvent("archive-all", {
  bubbles: true,
});

export const UnarchiveAllCallsEvent = new CustomEvent("unarchive-all", {
  bubbles: true,
});

export const ArchiveSingleCallEvent = (callId: string) =>
  new CustomEvent("archive-one", {
    detail: {
      callId,
    },
    bubbles: true,
  });

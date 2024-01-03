import {
  ArchiveAllCallsEvent,
  UnarchiveAllCallsEvent,
  unarchiveAllCalls,
} from "../../helpers/api";
import useArchiveAll from "../../hooks/useArchiveAll";

export default function Header() {
  const { mutate: archiveAll } = useArchiveAll();
  return (
    <div>
      <button
        onClick={() => {
          archiveAll();
          dispatchEvent(ArchiveAllCallsEvent);
        }}
      >
        Archive All
      </button>
      <button
        onClick={async () => {
          await unarchiveAllCalls();
          dispatchEvent(UnarchiveAllCallsEvent);
        }}
      >
        Unarchive All
      </button>
    </div>
  );
}

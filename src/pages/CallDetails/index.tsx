import { useParams } from "react-router";
import useGetCallDetails from "../../hooks/useCallDetails";
import dayjs from "dayjs";
import {BodySM} from "../../styles/components/Fonts"

export default function CallDetails() {
  const { call_id } = useParams();
  if (!call_id) {
    return <>Oops</>;
  }
  const { data: call, isLoading, isError } = useGetCallDetails(call_id || "");

  if (isLoading) {
    return (<>
    </>)
  }
  return (
    <div>
      {isLoading && "Loading..."}
      {isError && "Error"}
      {call && Object.entries(call).map((item: any, index) => (
        <li key={index}>
          <BodySM color="white">{item[0]} - {item[1]}</BodySM>
        </li>
      ))}
      {call && dayjs(call.created_at).format("MMMM D, YYYY h:mm A")}
    </div>
  );
}

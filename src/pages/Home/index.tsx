import useGetAllCalls from "../../hooks/useGetAllCalls";
import { CallWindow } from "../../components/CallWindow";
import CardListScreenSkeletal from "../../components/CallWindow/SkeletalScreen";

export default function Home() {
  const calls = useGetAllCalls();
  if(calls.isLoading){
    return <CardListScreenSkeletal />
  }
  return (
    <div>
      {calls.isLoading && "Loading calls..."}
      {calls.isError && "error loading calls"}
      {calls.data && <CallWindow calls={calls.data} />}
    </div>
  );
}

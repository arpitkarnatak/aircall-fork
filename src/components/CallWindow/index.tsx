import dayjs from "dayjs";
import { ICall } from "../../types/call";
import { CallDiv } from "../CallComponent";
import { Title32 } from "../../styles/components/Fonts";

interface ICallWindowProps {
  calls: ICall[];
}
export function CallWindow({ calls }: ICallWindowProps) {
  const groupedCalls = groupCallsByDay(calls);
  return (
    <div>
      {Object.keys(groupedCalls)
        .sort((day1, day2) => dayjs(day2).unix() - dayjs(day1).unix())
        .map((day) => (
          <div key={day}>
            <Title32 bold="700" color="white">
              {day}
            </Title32>
            {groupedCalls[day]
              .sort(
                (call1, call2) =>
                  dayjs(call2.created_at).unix() -
                  dayjs(call1.created_at).unix()
              )
              .map((call) => (
                <CallDiv key={call.id} call={call} />
              ))}
          </div>
        ))}
    </div>
  );
}

function groupCallsByDay(data: ICall[]) {
  const groupedData: { [key: string]: ICall[] } = {};

  data.forEach((call: ICall) => {
    const day = dayjs(call.created_at).format("DD MMM, YYYY");

    if (!groupedData[day]) {
      groupedData[day] = [];
    }
    groupedData[day].push(call);
  });
  return groupedData;
}

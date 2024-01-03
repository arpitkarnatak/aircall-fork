import { ICall } from "../../types/call";
import dayjs from "dayjs";
import { CallDivStyleMain } from "./styles";
import { Title24 } from "../../styles/components/Fonts";
import { getIconCallDirection, getIconCallType } from "../../helpers/icons";
import { MdCircle } from "react-icons/md";

interface ICallDivProps {
  call: ICall;
}

export function CallDiv({ call }: ICallDivProps) {
  return (
    <CallDivStyleMain to={`/call/${call.id}`}>
      <div>
        {getIconCallType(call)}
        {getIconCallDirection(call)}
        <Title24 bold={"true"}>
          {call.from} {!call.is_archived && <MdCircle color="red" size='0.5em' />}
        </Title24>
        <div>{dayjs(call.created_at).format("hh:MM A")}</div>
      </div>
    </CallDivStyleMain>
  );
}

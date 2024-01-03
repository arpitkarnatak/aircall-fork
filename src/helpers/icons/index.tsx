import {
  MdCallMade,
  MdCallReceived,
  MdPhoneInTalk,
  MdPhoneMissed,
  MdVoicemail,
} from "react-icons/md";

import { ICall } from "../../types/call";
export function getIconCallType(call: ICall) {
  switch (call.call_type) {
    case "missed":
      return <MdPhoneMissed color="red" />;
    case "answered":
      return <MdPhoneInTalk color="green" />;
    case "voicemail":
      return <MdVoicemail color="blue" />;
    default:
      break;
  }
}

export function getIconCallDirection(call: ICall) {
  switch (call.direction) {
    case "inbound":
      return <MdCallReceived color="black" />;
    case "outbound":
      return <MdCallMade color="black" />;
    default:
      break;
  }
}

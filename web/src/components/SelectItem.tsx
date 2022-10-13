import * as Select from "@radix-ui/react-select";
import { Check } from "phosphor-react";

interface SelectProps {
  value: string;
  title: string;
}

export default function SelectItem(props:SelectProps) {
  return (
    <Select.Item className="p-2 flex" value={props.value}>
    <Select.ItemText>{props.title}</Select.ItemText>
    <Select.ItemIndicator>
      <Check />
    </Select.ItemIndicator>
    </Select.Item>
  )
}

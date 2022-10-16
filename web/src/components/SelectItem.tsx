import * as Select from "@radix-ui/react-select";
import { Check } from "phosphor-react";

interface SelectProps {
  id: string;
  title: string;
}

export default function SelectItem(props:SelectProps) {
  return (
    <Select.Item className="p-2 px-8 flex hover:bg-[#111113] cursor-pointer justify-start rounded-md" key={props.id} value={props.title}>
    <Select.ItemText className="bg-white">{props.title}</Select.ItemText>
    <Select.ItemIndicator>
      <Check className="w-6 h-6 absolute left-0"/>
    </Select.ItemIndicator>
    </Select.Item>
  )
}



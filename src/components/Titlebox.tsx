import { TextBoxProps } from "@/lib/types";

export const Titlebox = (props: TextBoxProps) => {
  return <textarea className={props.className} placeholder="Untitled" />;
};

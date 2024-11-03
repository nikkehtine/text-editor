import { TextBoxProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Textbox = (props: TextBoxProps) => {
  return (
    <textarea
      className={cn(props.className, "grow rounded-md bg-background")}
      placeholder="Write your notes here..."
    />
  );
};

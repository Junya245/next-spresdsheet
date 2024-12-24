import { CellContent } from "@/types/spreadsheet";
import { useState,KeyboardEvent } from "react";

const onKeyDown = (event:KeyboardEvent) => {
    
}
export default function Cell({ content }: Props) {
  const [editing, setEditing] = useState<boolean>(false);
  return (
    <td onClick={() => setEditing(!editing)}>
      {" "}
      {editing ? (
        <input onClick={(e) => e.stopPropagation()} value={content} />
      ) : (
        content
      )}
    </td>
  );
}

interface Props {
  content: CellContent;
}


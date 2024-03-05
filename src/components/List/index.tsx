import { useState } from "react";
import { Item } from "./Item";
   interface marklist {
     a: number;
     b: string;
   }
   interface listItem {
     title: string;
     marks: marklist;
   }
   interface listProps{
    data:listItem[]
   }
export const List: React.FC<listProps> = ({data}): JSX.Element => {
  return (
    <div className="w-1/2">
      <ul >
        {data.map((item) => (
          <Item title={item.title}></Item>
        ))}
      </ul>
    </div>
  );
};
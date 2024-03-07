import { useState } from "react";
import { Item } from "./Item";
   interface marklist {
     a: number;
     b: string;
   }
   interface listItem {
     id:number;
     title: string;
     marks: marklist;
   }
   interface listProps{
    data:listItem[]
    handleEdit:(id:number,title:string)=>void
   }
export const List: React.FC<listProps> = ({data,handleEdit}): JSX.Element => {
  return (
    <div className="w-1/2">
      <ul className="flex flex-col gap-S">
        {data.map((item) => (
          <li key={item.id}>
          <Item  title={item.title} id={item.id} handleEdit={handleEdit}></Item>
          </li>
        ))}
      </ul>
    </div>
  );
};
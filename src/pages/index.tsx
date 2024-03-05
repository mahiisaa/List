import { useState } from "react";
import { List } from "../components/List"

export const HomePage=():JSX.Element=>{
   interface marklist {
     a: number;
     b: string;
   }
   interface listItem {
     title: string;
     marks: marklist;
   }
   const [list, setList] = useState<listItem[]>([
     {
       title: "reza",
       marks: { a: 20, b: "z" },
     },
     {
       title: "ali",
       marks: { a: 45, b: "l" },
     },
     {
       title: "mina",
       marks: { a: 1, b: "z" },
     },
     {
       title: "sara",
       marks: { a: 1, b: "k" },
     },
   ]);
    return (
      <div className="w-full border-4 border-[#003566] rounded-xl w-[600px] p-S flex flex-row justify-between gap-S">
        <List data={list}></List>
        <div className=" bg-green-300 w-[4px]"></div>
        <ul className="w-1/2">
          {list.map((item) => (
            <li className="p-S">{item.title}</li>
          ))}
        </ul>
      </div>
    );
}
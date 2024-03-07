import { useEffect, useState } from "react";
import { List } from "../components/List"

export const HomePage=():JSX.Element=>{
   interface marklist {
     a: number;
     b: string;
   }
   interface listItem {
     id:number
     title: string;
     marks: marklist;
   }
   const list = [
     {
       id: 1,
       title: "reza",
       marks: { a: 20, b: "z" },
     },
     {
       id: 2,
       title: "ali",
       marks: { a: 45, b: "l" },
     },
     {
       id: 3,
       title: "mina",
       marks: { a: 1, b: "z" },
     },
     {
       id: 4,
       title: "sara",
       marks: { a: 1, b: "k" },
     },
   ];
   const [copiedList, setCopiedList] = useState<listItem[]>(JSON.parse(JSON.stringify(list)));

   
   const handleEdit=(id:number,title:string)=>{
    const updatedList=copiedList.map((item)=>{
        if(item.id===id)
        item.title=title
        return item
    })
   setCopiedList(updatedList)
   }
    return (
      <div className=" rounded-xl w-[600px] p-L flex flex-row justify-between gap-S bg-[#fff]">
        <List data={copiedList} handleEdit={handleEdit}></List>
        <div className="bg-myblack w-[2px]"></div>
        <ul className="w-1/2 flex flex-col gap-S font-bold">
          {list.map((item2: any) => (
            <li key={item2.id} className="p-S ">
              {item2.title}
            </li>
          ))}
        </ul>
      </div>
    );
}
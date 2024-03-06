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
   useEffect(()=>{
    
   })
   
   const handleEdit=(id:number,title:string)=>{
    const updatedList=copiedList.map((item)=>{
        if(item.id===id)
        item.title=title
        return item
    })
    //console.log(list)
    console.log(copiedList)
    //console.log(list===list2)
   setCopiedList(updatedList)
   console.log(copiedList);

   }
    return (
      <div className="w-full border-4 border-[#003566] rounded-xl w-[600px] p-S flex flex-row justify-between gap-S">
        <List data={copiedList} handleEdit={handleEdit}></List>
        <div className=" bg-green-300 w-[4px]"></div>
        <ul className="w-1/2">
          {list.map((item2:any) => (
            <li key={item2.id} className="p-S">{item2.title}</li>
          ))}
        </ul>
      </div>
    );
}
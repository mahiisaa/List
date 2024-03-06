import { useState } from "react";
import { createPortal } from "react-dom";
import { EditModal } from "../../EditModal";

interface IItem{
    id:number
    title:string
    handleEdit:(id:number,title:string)=>void
}
export const Item: React.FC<IItem> = ({title,handleEdit,id}): JSX.Element => {
    const portals = document.getElementById("portals") as Element;
    const [editModal,setshowModal]=useState<boolean>(false)
  return (
    <div className=" flex justify-between bg-[#f1faee] font-bold p-S mt-S rounded-xl ">
      {title}
      <span
        onClick={() => {
          setshowModal(true);
        }}
      >
        edit
      </span>
      {createPortal(
        <EditModal
          editModal={editModal}
          title={title}
          id={id}
          handleEdit={handleEdit}
        />,
        portals
      )}
    </div>
  );
};
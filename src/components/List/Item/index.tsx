import { useState } from "react";
import { createPortal } from "react-dom";
import { EditModal } from "../../EditModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface IItem{
    id:number
    title:string
    handleEdit:(id:number,title:string)=>void
}
export const Item: React.FC<IItem> = ({title,handleEdit,id}): JSX.Element => {
    const portals = document.getElementById("portals") as Element;
    const [editModal,setshowModal]=useState<boolean>(false)
    const handleModalChange=()=>{
      setshowModal(prev=>!prev)
    }
  return (
    <div className=" flex justify-between border border-mygray font-bold p-S rounded-xl text-myblack ">
      {title}
      <FontAwesomeIcon icon={faEdit} onClick={handleModalChange} />
      {createPortal(
        <EditModal
          editModal={editModal}
          title={title}
          id={id}
          handleEdit={handleEdit}
          handleModalChange={handleModalChange}
        />,
        portals
      )}
    </div>
  );
};
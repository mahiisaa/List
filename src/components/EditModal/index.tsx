import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface EditModalProps {
  editModal: boolean;
  title: string;
  id: number;
  handleEdit: (id: number, title: string) => void;
  handleModalChange:()=>void
}
interface Item{
  id:number;
  title:string
}
export const EditModal: React.FC<EditModalProps> = ({
  editModal,
  title,
  id,
  handleEdit,
  handleModalChange
}): JSX.Element => {
    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm<Item>();
    const onSubmit = (data: Item) => {
       data.id = id;
      handleEdit(id,data.title)
      handleModalChange()
      console.log(data)
      reset();
    };
  return (
    <>
      {editModal && (
        <div className="flex justify-center items-center bg-[#000] bg-opacity-25 h-[100vh] bg-modalOverlay  fixed top-0 right-0 left-0 bottom-0 z-50">
          <div className="bg-[#fff] w-[400px] p-S rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <FontAwesomeIcon icon={faClose} onClick={handleModalChange} />
              <h2 className="font-bold">Edit Text </h2>
              <div></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-center gap-2">
                <input
                  id="title"
                  defaultValue={title}
                  className=" dark:text-[#323232] rounded-md border border-lightgray p-2 text-left w-2/3"
                  type={"text"}
                  {...register("title")}
                />
                <input
                  type="submit"
                  className="flex justify-center rounded-md items-center bg-primary text-[#fff] w-1/3"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
function handleEdit(data: String) {
    throw new Error("Function not implemented.");
}


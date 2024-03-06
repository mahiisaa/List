import { useForm, SubmitHandler } from "react-hook-form";
interface EditModalProps {
  editModal: boolean;
  title: string;
  id:number
  handleEdit:(id:number,title:string)=>void
}
interface Item{
  id:number;
  title:string
}
export const EditModal: React.FC<EditModalProps> = ({
  editModal,
  title,
  id,
  handleEdit
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
      // data.title=title
      //console.log(data);
      handleEdit(id,data.title)
      console.log(data)
      reset();
    };
  return (
    <>
      {editModal && (
        <div className="flex justify-center items-center bg-[#000] bg-opacity-25 h-[100vh] bg-modalOverlay  fixed top-0 right-0 left-0 bottom-0 z-50">
          <div className="bg-[#fff] w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                
                id="title"
                className="p-S"
                type={"text"}
                {...register("title")}
              />
              <input type="submit" />
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


interface IItem{
    title:string
}
export const Item: React.FC<IItem> = ({title}): JSX.Element => {
  return (
    <div className=" flex justify-between bg-[#f1faee] p-S mt-S">
      {title}
      <span>edit</span>
    </div>
  );
};
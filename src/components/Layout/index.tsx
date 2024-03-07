import { Outlet } from "react-router-dom"

export const Layout:React.FC=():JSX.Element=>{
    return (
      <div className="h-[100vh] flex justify-center items-center bg-bgColor">
        <Outlet />
      </div>
    );
}
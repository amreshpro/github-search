import { Link } from "react-router-dom"


const Error404 = () => {
  return (
    <div className="flex flex-col  justify-center items-center">

<h1 className=" sm:bg-violet-100 w-full  text-4xl text-red-500 font-bold font-nunito text-center">Page Not Found</h1>
<Link to="/" className="btn px-4 py-2 text-xl text-white bg-violet-500 rounded-lg m-1 items-center font-nunito font-bold">Back to Home</Link>
<img src="/error.jpg" alt="" className="px-2 py-2  " />
        <h1 className=" text-3xl text-red-500 font-bold font-nunito text-center">Page Not Found</h1>
    </div>
  )
}
export default Error404
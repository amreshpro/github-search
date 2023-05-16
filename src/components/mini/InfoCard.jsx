

const InfoCard = ({data,title,icon}) => {
  return (
    <div className="flex gap-2 justify-center items-center bg-primary-200 m-1 px-2 ">

<div className="icon ">
{icon}
</div>
<div className="info text-center font-poppins text-primary-900">
    <h1>{title}</h1>
    <h1>{data}</h1>
</div>


    </div>
  )
}
export default InfoCard
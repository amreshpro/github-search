


const FollowerCard = ({login,avatar_url,html_url}) => {
  return (
    <div className=" flex gap-2 items-center p-1 ">

<div className="img rounded-full">
    <img src={avatar_url} alt="profile-photo"  className="w-16 rounded-full object-fill" />
</div>
<div className="text">
    <h1 className="text-lg xsm:text-sm text-poppins text-primary-950">{login}</h1>
    <a href={html_url} className="text-blue xsm:text-sm">{html_url} </a>
</div>
    </div>
  )
}
export default FollowerCard
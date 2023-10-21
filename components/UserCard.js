




const UserCard = ({login,avatar_url,html_url}) => {
    return (
      <div className=" flex  gap-1 justify-start p-1 px-1">
  
  <div className="img  rounded-full">
      <img src={avatar_url ?? ''} alt="profile-photo"  className="w-16  rounded-full object-fill " />
  </div>
  <div className="text">
      <h1 className="text-lg xsm:text-sm text-poppins ">{login??''}</h1>
      <a href={html_url ??''} className="text-lightBlue text-sm">{html_url??''} </a>
  </div>
      </div>
    )
  }
  export default UserCard
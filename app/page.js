import Followers from "@/components/Followers"
import Following from "@/components/Following"
import { ModeChangeButton } from "@/components/ModeChangeButton"
import Search from "@/components/Search"
import User from "@/components/User"


const page = () => {
  return (
    <div className="py-4 pb-8">
<Search/>
<User/>
<div className="container flex gap-4 px-1 justify-center flex-wrap">
<Followers/>
<Following/>
</div>
      {/* <ModeChangeButton/> */}
    </div>
  )
}
export default page
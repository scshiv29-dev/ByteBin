import{UserButton,auth,currentUser} from "@clerk/nextjs"

export default async function Navbar() {
    const user = await currentUser();
    
return(
<div className="navbar bg-base-900">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href="/">ByteBin</a>
  </div>
  <div className="flex-none gap-2">
  
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" >
        
        <UserButton/>
      </div>

    </div>
  </div>
</div>
)

}
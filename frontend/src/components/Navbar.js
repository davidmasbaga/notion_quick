import { signOut } from 'next-auth/react'
import { AiOutlineLogout } from "react-icons/ai";

function Navbar(props) {
    return (
        <div className="navbar px-12 pt-5 ">
            <div className="flex-1 items-center ">
                
            </div>
            <div className="flex gap-5">
                <div className="dropdown dropdown-end">
                    
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            <img src={props.image} />

                        </div>

                    </label>

                </div>
                
                <button className="flex flex-col justify-center content-center items-center" onClick={signOut}>
                    <AiOutlineLogout className='text-xl text-red-500 ' />
                    <p className="text-xs pl-1 text-red-500">Logout</p>
                </button>
            </div>
        </div>
    )
}

export default Navbar
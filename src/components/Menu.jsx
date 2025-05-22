import { NavLink } from "react-router-dom"
import { useAuth } from '../context/context'

function Menu({status}) {

    const { handleMenu } = useAuth()

  return (
    <div className={`w-auto h-96 absolute top-[118px] right-0 flex z-10 ${status} bg-graylim`}>
      <ul className="w-96 h-full flex flex-col justify-center items-center gap-5 bg-opacity-50">
        <li className='text-2xl font-Karla font-medium bg-yellowlim rounded-full py-2 px-6'>
          <NavLink onClick={handleMenu} role='menuitem' to={'/littleLemon'} >Home</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium  bg-yellowlim rounded-full py-2 px-6'>
          <NavLink role='menuitem' to={'/littleLemon'} >About</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium  bg-yellowlim rounded-full py-2 px-6'>
          <NavLink role='menuitem' to={'/littleLemon'} >Menu</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium  bg-yellowlim rounded-full py-2 px-6'>
          <NavLink onClick={handleMenu} role='menuitem' to={'/booking'}>Reserv Table</NavLink>
        </li>
        <li className='text-2xl font-Karla font-medium  bg-yellowlim rounded-full py-2 px-6'>
          <NavLink onClick={handleMenu} role='menuitem' to={'/reservations'}>Reservations</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Menu;

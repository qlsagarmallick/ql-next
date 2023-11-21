import { fetchNavbarData } from '../../lib/fetchData'
import NavList from './sparePart/NavList'
const Navbar = async () => {
     const data = await fetchNavbarData()
     return (
          <div className="py-8 px-20">
               <NavList data={data} />
          </div>
     )
}

export default Navbar

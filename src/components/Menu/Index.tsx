import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
export const Menu = () => {
  return (
    <>
      <div>
        <nav>
          <CSSTransition in={true} timeout={300} classNames="menu-transition">
            <ul className=" ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'border p-2 text-center font-semibold text-gray-800 rounded-xl'
                      : ''
                  }
                >
                  <span className="">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'border p-2 text-center font-semibold text-gray-800 rounded-xl'
                      : ''
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/post"
                  className={({ isActive }) =>
                    isActive
                      ? 'border p-2 text-center font-semibold text-gray-800 rounded-xl'
                      : ''
                  }
                >
                  Post
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="redirect"
                  className={({ isActive }) =>
                    isActive
                      ? 'border p-2 text-center font-semibold text-gray-800 rounded-xl'
                      : ''
                  }
                >
                  Redirect
                </NavLink>
              </li>
            </ul>
          </CSSTransition>
        </nav>
      </div>
    </>
  )
}

import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export const Layout = () => {
    return (
        <>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end>
                 Головна
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/contacts">Мої контакти</NavLink>
              </li> */}
            </ul>
          </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <main>
            <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
        </>
    )
}
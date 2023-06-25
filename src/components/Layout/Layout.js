import { AppBar } from "components/AppBar/AppBar"
import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import {  Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export const Layout = () => {
    return (
        <>
       <AppBar/>
      <Suspense fallback={<Loader />}>
        <main>
            <Outlet />
        </main>
      </Suspense>
      <ToastContainer />
        </>
    )
}
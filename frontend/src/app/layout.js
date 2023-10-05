import "./globals.css"
import { Inter } from "next/font/google"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from "@/context/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AdminTask",
  description: "Un adminitrador de tareas de alto rendimiento",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-center bg-[#1a2040] bg-none">
        {/* <Sidebar /> */}

        <AuthProvider>{children}</AuthProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

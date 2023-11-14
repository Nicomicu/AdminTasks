import "./globals.css"
import { Inter } from "next/font/google"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from "@/context/AuthProvider"
import { TaskProvider } from "./(privatePart)/context/taskProvider"
import { ModalProvider } from "./(privatePart)/listTask/context/modalProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AdminTask",
  description: "Un adminitrador de tareas de alto rendimiento",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-center bg-[#d1daeb] bg-none">
        <AuthProvider>
          <TaskProvider>
            <ModalProvider>{children}</ModalProvider>
          </TaskProvider>
        </AuthProvider>

        <ToastContainer />
      </body>
    </html>
  )
}

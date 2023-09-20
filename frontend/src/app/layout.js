import "./globals.css"
import { Inter } from "next/font/google"
import { GlobalProvider } from "@/context/GlobalProvider"
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
        <GlobalProvider>
          <AuthProvider>{children}</AuthProvider>
        </GlobalProvider>
      </body>
    </html>
  )
}

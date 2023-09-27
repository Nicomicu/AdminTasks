import Sidebar from "./adminTask/components/Sidebar"

const SidebarLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}

export default SidebarLayout

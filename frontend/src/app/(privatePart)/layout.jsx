import ListTaskColumnPage from "./listTask/components/ListTaskColumn"

const SidebarLayout = ({ children }) => {
  return (
    <div>
      <ListTaskColumnPage />
      {children}
    </div>
  )
}

export default SidebarLayout

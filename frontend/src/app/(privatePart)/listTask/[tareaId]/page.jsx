import React from "react"
import editRequest from "../services/editRequest"

const page = async ({ params }) => {
  const Tarea = await editRequest(params.tareaId)
  return <div>{params.tareaId}</div>
}

export default page

import react from "react"
import axios from "axios"

export default async function Requests(
  method: "GET" | "POST" | "PUT" | "DELETE",
  route: string,
  data?: any,
  headers?: any,
): Promise<any> {
  try {
    const response = await axios({
      method: method,
      url: `http://localhost:3001${route}`,
      data: data,
      headers: headers,
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

import * as React from "react"

import type { Data } from "../types/data"

export type Context = {
  data: Data[]
  setData: React.Dispatch<React.SetStateAction<Data[]>>
}

const PageContext = React.createContext<Context>({ data: [], setData: () => { } })

export default PageContext
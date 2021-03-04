import * as React from 'react'

import type { Data } from "src/types/data"
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

import PageContext from "src/context/PageContext"
import type { Context } from "src/context/PageContext"

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = React.useState<Data[]>(props.data)

  return (
    <div>
      <h1>Title</h1>
      <PageContext.Provider value={{ data, setData }}>
        <First />
      </PageContext.Provider>
    </div>
  )
}

function First() {
  return (
    <Second />
  )
}

function Second() {
  return (
    <Third />
  )
}

function Third() {
  const { data, setData } = React.useContext<Context>(PageContext)

  function add() {
    setData([...data, { id: 3, name: "Sarah" }])
  }

  return (
    <div>
      <ul>
        {data.map((entry) => <li key={entry.id}>{entry.name}</li>)}
      </ul>
      <button onClick={add}>Add sarah</button>
    </div>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    props: {
      data: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
    }
  }
}

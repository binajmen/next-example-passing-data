import * as React from 'react'

import type { Data } from "src/types/data"
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = React.useState<Data[]>(props.data)

  return (
    <div>
      <h1>Title</h1>
      <First data={data} setData={setData} />
    </div>
  )
}

type Props<T> = {
  data: T[]
  setData: React.Dispatch<React.SetStateAction<T[]>>
}

function First<T>({ data, setData }: Props<Data>) {
  return (
    <Second data={data} setData={setData} />
  )
}

function Second<T>({ data, setData }: Props<Data>) {
  return (
    <Third data={data} setData={setData} />
  )
}

function Third<T>({ data, setData }: Props<Data>) {
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

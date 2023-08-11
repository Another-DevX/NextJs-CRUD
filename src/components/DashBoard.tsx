import React from 'react'
import axios from 'axios'
import { Interface } from 'readline'
import Link from 'next/link'

interface Task {
  _id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
}

async function getServers () {
  const tasks = await axios.get(' http://127.0.0.1:3001/api/tasks')
  console.debug(tasks)
  return tasks.data.message
}

export default async function DashBoard () {
  const tasks: Task[] = await getServers()
  return (
    <div className='flex flex-wrap gap-10'>
      {tasks.map(task => (
        <div
          className='flex flex-col justify-center items-center gap-2 p-10 bg-slate-400 shadow-sm rounded-md'
          key={task._id}
        >
          <h1 className='text-4xl font-light'>{task.title}</h1>
          <p>{task.description}</p>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <Link
              href={`/task/${task._id}`}
              className='w-full hover:bg-sky-600 transition-all duration-75 f-full rounded-md bg-sky-700 shadow-md font-bold text-slate-50 px-5 py-2'
            >
              Editar
            </Link>
            <Link
              href={`/task/${task._id}`}
              className='w-full hover:bg-sky-600 transition-all duration-75 f-full rounded-md bg-sky-700 shadow-md font-bold text-slate-50 px-5 py-2'
            >
              Eliminar
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

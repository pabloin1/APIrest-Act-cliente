import React from 'react'

export default function Input({name}) {
  return (
    <input
    type="text"
    placeholder={`${name}`}
    className="input input-bordered input-primary w-64 text-[1rem] "
  />
  )
}

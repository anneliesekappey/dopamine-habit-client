import React, { useState } from 'react'
import apiUtils from '../utils/api.utils'
import { FormHabit, RealButton } from './commons'

export const NewHabit = ({getHabit}) => {
  const [description, setDescription] = useState(' ')
  const [title, setTitle] = useState(' ')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const addNewHabit = {
      title,
      description,
      frequency:'uma vez por dia'
    }

    await apiUtils.addNewHabit(addNewHabit)
    await getHabit()
    setDescription(' ')
    setTitle(' ')
  }

  return (
    <FormHabit onSubmit={handleSubmit}>
      <div>
        <label>Habit Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Habit Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <RealButton> Add Habit </RealButton>
    </FormHabit>
  )
}

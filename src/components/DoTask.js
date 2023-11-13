
import { useState } from 'react'

export function DoTask({ addTask }) {
    const [task, setTask] = useState('') 

    return (
        <div className='doTask'>
            <input type='text'
                    className='inputTask'
                    placeholder='Введите новую задачу'
                    onChange={(event) => setTask(event.target.value)}
                    id='inputTask'
                    value={task}></input>
            <button className='btnDoTask' type='submit' onClick={() => {
                addTask(task)
                setTask('')
                }}>Сохранить</button>
        </div>
    )
}
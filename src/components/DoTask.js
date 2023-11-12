
import { useState } from 'react'

export function DoTask({ tasks, addTask }) {
    const [task, setTask] = useState('') 

    return (
        <div className='doTask'>
            <input type='text'
                    className='inputTask'
                    placeholder='Введите новую задачу'
                    onChange={(event) => setTask(event.target.value)}
                    id='inputTask'></input>
            <button className='btnDoTask' type='submit' onClick={() => addTask(task)}>Сохранить</button>
        </div>
    )
}
export function Task({ task, doneTask, deleateTask }) {

    

    return (
        <div className={`taskContainer taskStatus_${task.status}`}>
            <p className="taskText">{task.text}</p>
            <div className="actionButtons">
                {task.status === 'progress' && <button className="done" onClick={() => doneTask({...task, status: 'done'})}>Сделано</button>}
                <button className="delete" onClick={() => deleateTask(task.id)}>Удалить</button>
            </div>
        </div>
    )
}
export function Task({ task, index }) {

    function doneTask() {
        let myElement = document.getElementById(index);
        myElement.style.textDecoration = "line-through";
    }

    function deleateTask(index) {
        const myArray = JSON.parse(localStorage.getItem('tasks'));
        console.log(myArray);
        myArray.splice(index,1);
        console.log(myArray);
        localStorage.setItem('tasks', JSON.stringify(myArray));
        let myElement = document.getElementById(index);
        myElement.remove();
    }

    return (
        <div className="taskContainer" id={index}>
            <p className="taskText">{task}</p>
            <div className="actionButtons">
                <button className="done" onClick={() => doneTask()}>Сделано</button>
                <button className="delete" onClick={() => deleateTask(index)}>Удалить</button>
            </div>
        </div>
    )
}
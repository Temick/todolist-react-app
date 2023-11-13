const LOCAL_STORAGE_KEY = 'tasks'

export function getTasks() {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    return data
}

export function setTask(data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

export function removeTask(id) {
    const allData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const newData = allData.filter(item => item.id !== id)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
    return newData
}

export function updateTask(task) {
    const allData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const newData = allData.map(item => {
        if (item.id === task.id) { 
            return task
        } else {
            return item
        }
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData))
    return newData
}
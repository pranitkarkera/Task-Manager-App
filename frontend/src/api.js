import { API_URL} from "./utils"

export const CreateTask = async(taskObj) => {
    const url = `${API_URL}/tasks`;
    // console.log('url', url)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskObj)
    };
    try{
        const result = await fetch(url, options);
        const data = await result.json()
        // console.log(data)
        return data
    }catch(err){
        return err;
    }
}

export const GetAllTask = async(taskObj) => {
    const url = `${API_URL}/tasks`;
    // console.log('url', url)
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const result = await fetch(url, options);
        const data = await result.json()
        // console.log(data)
        return data
    }catch(err){
        return err;
    }
}

export const DeleteTaskById = async(id) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url', url)
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try{
        const result = await fetch(url, options);
        const data = await result.json()
        console.log(data)
        return data
    }catch(err){
        console.error('Error deleting task:', err);
        return { success: false, message: 'Failed to delete task' }; // Handle error
    }
}

export const UpdateTaskById = async(id, reqBody) => {
    const url = `${API_URL}/tasks/${id}`;
    console.log('url', url)
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    };
    try{
        const result = await fetch(url, options);
        const data = await result.json()
        console.log('Update response:', data); // Log the response
        return data
    }catch(err){
        console.error('Error updating task:', err);
        return { success: false, message: 'Failed to update task' }; // Handle error
    }
}
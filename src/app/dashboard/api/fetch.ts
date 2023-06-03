const getEvents = async()=>{
    const options = {
        method:"GET",
        headers:{
            "Authorization": "nP79WihMYkzc5SyQpdpoG6Mu8xg8BTHqe378969hMlzNZ4NIrjnaIMXVniNQxfrm",
        },
    }
    const res = await fetch("https://holy-moon-2e12.matea3.workers.dev/api/events",options)
    return await res.json()
}
export{getEvents}
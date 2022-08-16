export const compareTimePassedSinceLastLogin = ()=>{

    if(localStorage.getItem('@ultimoLogin')){
        const lastLogin = Number(localStorage.getItem('@ultimoLogin'))
        const now = new Date().valueOf()
        const hours = 47
        const seconds = (now - lastLogin)/1000
        if(seconds > hours*3600){
            localStorage.clear()
        }
    }
}

export const getTodayDate = ()=>{
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const dateObj = {
        day,
        month,
        year,
        hour,
        minutes,
        now:`${day}-${month}-${year} ${hour}:${minutes}` 
    }
    return dateObj
}

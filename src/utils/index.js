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


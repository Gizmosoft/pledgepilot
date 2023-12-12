
export function getUserInTheSession() {
    const sessionUser = sessionStorage.getItem("user")
    if(sessionUser !== null){
        return JSON.parse(sessionUser)
    } else {
        return null
    }
}
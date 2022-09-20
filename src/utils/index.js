export const setStorage = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
        return
    } catch (error) {
        console.log('setStorage error')
        return false
    }
}

export const getStorage = (key) => {
    try {
        console.log(localStorage.getItem(key))
        return JSON.parse(localStorage.getItem(key) | '')
    } catch (error) {
        console.log('getStorage error', error)
        return ''
    }
}

export const setToken = (token) => {
    setStorage('token', token)
}
export const getToken = () => {
    return getStorage('token')
}

export class LocalStorage {
    static setItem = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            return true
        } catch (error) {
            console.log('LocalStorage setStorage error', error)
            return false
        }
    }

    static getItem = (key) => {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (error) {
            console.log('LocalStorage getStorage error', error)
            return ''
        }
    }
}
export class SessionStorage {
    static setItem = (key, value) => {
        try {
            sessionStorage.setItem(key, JSON.stringify(value))
            return true
        } catch (error) {
            console.log('SessionStorage setStorage error', error)
            return false
        }
    }

    static getItem = (key) => {
        try {
            return JSON.parse(sessionStorage.getItem(key))
        } catch (error) {
            console.log('SessionStorage getStorage error', error)
            return ''
        }
    }
}

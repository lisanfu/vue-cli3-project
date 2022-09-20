import axios from 'axios'
export const loadNetworkPerformanceStatus = () => {
    return axios.get('/loadNetworkData')
}

export const loadServerStatus = () => {
    return axios.get('/loadServerData')
}

export const loadPvStatus = () => {
    return axios.get('/loadPvData')
}

export const loadVisitStatus = () => {
    return axios.get('/loadVisitData')
}

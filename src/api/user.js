import axios from '.'
import '../mock/index'
export const login = ({ username, password }) => {
    const data = {
        username,
        password
    }
    return axios.request({
        url: '/login',
        data,
        method: 'post'
    })
}

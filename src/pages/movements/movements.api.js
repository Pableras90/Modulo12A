import Axios from 'axios'

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsByAccountId = accountId => Axios.get(`${url}?accountId=${accountId}`)
.then(response => {
    return response.data;
});
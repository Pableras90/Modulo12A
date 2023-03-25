import Axios from 'axios'

const accountUrl = `${process.env.BASE_API_URL}/account`;

export const getAccount = id => Axios.get(`${accountUrl}/${id}`).then(response => {
    return response.data;
});

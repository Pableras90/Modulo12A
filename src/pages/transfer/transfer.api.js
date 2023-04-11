import Axios from 'axios'

const url = `${process.env.BASE_API_URL}/transfer`;
const apiUrl = `${process.env.BASE_API_URL}/account-list`;

export const insertTransfer = transfer =>
    Axios.post(`${url}/${transfer.id}`, transfer).then(response => {       
        return response.data;
    });


export const getApiAccountList = () =>
    Axios.get(apiUrl).then((response) => {
        return response.data;
    });


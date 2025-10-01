import { axiosInstance } from 'src/shared/api/axiosInstance';

const baseUrl = '/product';

async function readAll() {
    const response = (await axiosInstance.get(`${baseUrl}/read-all`)).data;
    return response;
}

async function readAllFiltered() {
    const respone = (await axiosInstance.get(`${baseUrl}/read-all/filter`)).data;
    return respone;
}

export const productService = {
    readAll,
    readAllFiltered,
};

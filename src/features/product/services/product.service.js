import { axiosInstance } from 'src/shared/api/axiosInstance';

const baseUrl = '/product';

async function readAll() {
    const response = (await axiosInstance.get(`${baseUrl}/read-all`)).data;
    return response;
}

async function readAllByFilter(readAllProductsByFilterDto) {
    const respone = (await axiosInstance.post(`${baseUrl}/read-all/filter`, readAllProductsByFilterDto)).data;
    return respone;
}

export const productService = {
    readAll,
    readAllByFilter,
};

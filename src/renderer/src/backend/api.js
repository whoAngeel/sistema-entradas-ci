import axios from 'axios'

const API_BASE = 'http://localhost:9000/api/entradas'


export async function fetchRegistro() {
    try {
        const response = await axios.get(API_BASE)
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error");
    }
}

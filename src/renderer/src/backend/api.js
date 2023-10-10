import axios from 'axios'
import { useRegistrosStore } from '../stores/counterEnters.store'


export const API_BASE = 'http://localhost:9000/api/entradas'


export async function fetchRegistro() {
    try {
        const response = await axios.get(API_BASE)
        return response.data;
    } catch (error) {
        console.log("Error");
        return null
    }
}

import axios from 'axios'

function fetchData() {

    axios.get(' http://localhost:9000/api/entradas/all').then(res => { return res.data }).catch(err => {
        console.log("Error trayendo todos los datos");
        return
    })
}

export async function data() {
    try {
        const response = await axios.get(' http://localhost:9000/api/entradas/all')
        const datos = response.data
        // console.log(datos);
        const objeto = {
            labels: datos.map(registro => registro?.date),
            datasets: [
                {
                    label: 'Total',
                    backgroundColor: 'rgb(41, 184, 219)',
                    data: datos.map(registro => registro?.total)
                },
            ]
        }
        console.log('objeto', objeto);
        return objeto
    } catch (error) {
        console.log(error.message)
    }
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}

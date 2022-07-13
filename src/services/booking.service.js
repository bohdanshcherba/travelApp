const url = "https://travel-app-api.glitch.me/api/v1/bookings"

class Booking {
    getAll = async () => {
        return await fetch(`${url}/`).then(res => res.json())
    }

    create = async (data) =>{

        return await fetch(`${url}/`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())

    }

    delete = async (id) => {
        return await fetch(`${url}/${id}`,{
            method: "DELETE"
        }).then(res => res.json())
    }
}

export {Booking}

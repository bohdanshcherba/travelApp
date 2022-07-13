const url = "https://travel-app-api.glitch.me/api/v1/bookings"

class Booking {
    getAll = async (token) => {
        return await fetch(`${url}/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    }

    create = async (data,token) =>{

        return await fetch(`${url}/`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': `Bearer ${token}`
            }

        }).then(res => res.json())

    }

    delete = async (id,token) => {
        return await fetch(`${url}/${id}`,{
            method: "DELETE",
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => res.json())
    }
}

export {Booking}

const url = "https://travel-app-api.glitch.me/api/v1/trips"

class Trips {
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

    getById = async (id,token) => {
        return await fetch(`${url}/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            }
            ).then(res => res.json())
    }
}

export {Trips}

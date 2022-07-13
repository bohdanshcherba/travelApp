const url = "https://travel-app-api.glitch.me/api/v1/trips"

class Trips {
    getAll = async () => {
        return await fetch(`${url}/`).then(res => res.json())
    }

    getById = async (id) => {
        return await fetch(`${url}/${id}`).then(res => res.json())
    }
}

export {Trips}

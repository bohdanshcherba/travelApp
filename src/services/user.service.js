const url = "https://travel-app-api.glitch.me/api/v1/auth"

class User {

    signIn = async (data) => {
        return await fetch(`${url}/sign-in`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())
    }

    signUp = async (data) => {
        return await fetch(`${url}/sign-up`, {
            method: 'POST',

            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json())
    }

    getCurrentUser = async (token) => {
        return await fetch(`${url}/authenticated-user`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': JSON.stringify(`Bearer ${token}`)
            }

        }).then(res => res.json())

    }

}

export {User}

import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const login = createAsyncThunk(ActionType.LOG_IN, async (request, {extra: {services}}) => {
        const data = await services.user.signIn(request)

        services.storage.setItem("token", data.token)
        return {user: data.user}
    }
);

const registration = createAsyncThunk(ActionType.SIGN_UP, async (request, {extra: {services}}) => {
    console.log(request)

    const data = await services.user.signUp(request)
    console.log(data)

        services.storage.setItem("token", data.token)
        return {user: data.user}
    }
);

const logout = createAsyncThunk(ActionType.LOG_OUT, async (request, {extra: {services}}) => {
        services.storage.removeItem("token")
        return {user: null}
    }
);

const loadCurrentUser = createAsyncThunk(ActionType.CURRENT_USER, async (request, {extra: {services}}) => {

        let token = services.storage.getItem('token')
        let data = null

        if (token) {
            data = await services.user.getCurrentUser(token)
        }

        return {user: data}

    }
);

export {login, registration, logout, loadCurrentUser}

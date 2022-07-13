import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {usersActionCreator} from "../actions";

const initialState = {
    currentUser: null,
    isLoading: true,
};

const reducer = createReducer(initialState, builder => {

    builder.addMatcher(isAnyOf(
        usersActionCreator.login.rejected,
        usersActionCreator.registration.rejected,
        usersActionCreator.loadCurrentUser.rejected,
    ), (state) => {
        state.currentUser = null
        state.isLoading = false

    });

    builder.addMatcher(isAnyOf(
        usersActionCreator.login.pending,
        usersActionCreator.logout.pending,
        usersActionCreator.loadCurrentUser.pending,
        usersActionCreator.registration.pending,
    ), (state) => {
        state.isLoading = true
    });

    builder.addMatcher(isAnyOf(
        usersActionCreator.login.fulfilled,
        usersActionCreator.logout.fulfilled,
        usersActionCreator.loadCurrentUser.fulfilled,
        usersActionCreator.registration.fulfilled,
    ), (state, action) => {

        state.currentUser = action.payload.user;
        state.isLoading = false

    });

})

export {reducer}

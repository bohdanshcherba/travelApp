import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {userActionCreator} from "../actions";

const initialState = {
    currentUser: null,
    isLoading: true,
};

const reducer = createReducer(initialState, builder => {

    builder.addMatcher(isAnyOf(
        userActionCreator.login.rejected,
        userActionCreator.registration.rejected,
        userActionCreator.loadCurrentUser.rejected,
    ), (state) => {
        state.currentUser = null
        state.isLoading = false

    });

    builder.addMatcher(isAnyOf(
        userActionCreator.login.pending,
        userActionCreator.logout.pending,
        userActionCreator.loadCurrentUser.pending,
        userActionCreator.registration.pending,
    ), (state) => {
        state.isLoading = true
    });

    builder.addMatcher(isAnyOf(
        userActionCreator.login.fulfilled,
        userActionCreator.logout.fulfilled,
        userActionCreator.loadCurrentUser.fulfilled,
        userActionCreator.registration.fulfilled,
    ), (state, action) => {

        state.currentUser = action.payload.user;
        state.isLoading = false

    });

})

export {reducer}

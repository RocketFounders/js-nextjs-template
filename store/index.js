import {proxy, useSnapshot} from 'valtio';
import cloneDeep from 'lodash.clonedeep';


export const INITIAL_STATE = {
    isDemo: false,
    profileDetail: {
        id: null,
        username: "",
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        photoUrl: null,
        role: "",
        isInternal: false
    },
};

export const state = proxy(INITIAL_STATE);

export function useProfileDetail() {
    return useSnapshot(state).profileDetail;
}

export function resetStore() {
    state.obj = cloneDeep(INITIAL_STATE);
}

import {proxy, useSnapshot} from 'valtio';
import cloneDeep from 'lodash.clonedeep';

const PROFILE = {
    id: null,
    username: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    photoUrl: null,
    role: "",
    isInternal: false
}

export const INITIAL_STATE = {
    isDemo: false,
    profileDetail: {
        ...PROFILE
    },
    allProfiles: [{...PROFILE}]
};

export const state = proxy(INITIAL_STATE);

export function useProfileDetail() {
    return useSnapshot(state).profileDetail;
}

export function useAllProfiles() {
    return useSnapshot(state).allProfiles;
}


export function resetStore() {
    state.obj = cloneDeep(INITIAL_STATE);
}

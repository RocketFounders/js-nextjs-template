import profileService from "@/services/profile";
import {INITIAL_STATE, state} from "@/store";


const profileActions = {
    getAllProfiles: async (token) => {
        const [profiles, error] = await profileService.getAllProfiles(token);
        if (error) {
            throw new Error(error);
        }
        state.allProfiles = profiles;
        return profiles;
    },
    getProfile: async (token) => {
        if (!token) {
            const profileDetail = INITIAL_STATE.profileDetail;
            profileActions.setProfile(profileDetail);
            return profileDetail;
        }
        const [profile, error] = await profileService.getProfile(token);
        if (error) {
            throw new Error(error);
        }
        profileActions.setProfile(profile);
        return profile;
    },
    update: async (payload, token) => {
        const [profile, error] = await profileService.update(payload, token);
        if (error) {
            throw new Error(error);
        }
        return profile;
    },
    authProfile: async (payload) => {
        const [token, error] = await profileService.authProfileByPassword(payload);
        if (error) {
            throw new Error(error);
        }
        return token;
    },
    createProfile: async (profile) => {
        const payload = {
            "username": profile.username,
            "password": profile.password,
            "email": profile.email,
            "phoneNumber": profile.phoneNumber,
            "firstName": profile.firstName,
            "lastName": profile.lastName,
            "photo_url": null
        };

        const [token, error] = await profileService.createProfile(payload);
        if (error) {
            throw new Error(error);
        }
        return token;
    },

    logoutProfile: async (token) => {
        const [status, error] = await profileService.logoutProfile(token);
        if (error) {
            throw new Error(error);
        }
        return status;
    },

    setProfile: (profile) => {
        state.profileDetail = profile;
    },

};

export default profileActions;

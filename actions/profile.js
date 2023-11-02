import profileService from "@/services/profile";
import {INITIAL_STATE, state} from "@/store";


const profileActions = {
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
            "phone_number": profile.phoneNumber,
            "first_name": profile.firstName,
            "last_name": profile.lastName,
            "photo_url": null
        };

        const [token, error] = await profileService.createProfile(payload);
        if (error) {
            throw new Error(error);
        }
        return token;
    },

    logoutProfile: async () => {
        const [status, error] = await profileService.logoutProfile();
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

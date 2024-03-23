import axiosInstance from "../plugins/axios";


const profileService = {

    getAllProfiles: async (token) => {
        try {
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
            const {data} = await axiosInstance.get(`/profile/all`);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    update: async (payload, token) => {
        try {
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
            const config = {headers: {'Content-Type': 'application/json'}};
            const {data} = await axiosInstance.post(`/profile/update`, payload, config);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },


    getProfile: async (token) => {
        try {
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
            const {data} = await axiosInstance.get(`/profile/current`);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },

    authProfileByPassword: async (payload) => {
        try {
            axiosInstance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            const {data} = await axiosInstance.post(`/token`, payload);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },
    createProfile: async (payload) => {
        try {
            const {data} = await axiosInstance.post(`/profile/create`, payload);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    },
    logoutProfile: async (token) => {
        try {
            axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
            const {data} = await axiosInstance.post(`/profile/logout`);
            return [data, null];
        } catch (error) {
            return [null, error];
        }
    }
};

export default profileService;

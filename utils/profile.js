import jwtDecode from 'jwt-decode';

const decodeToken = (token) => {
    let decoded;
    try {
        decoded = jwtDecode(token);
    } catch (e) {
        return null;
    }
    return decoded;
};

const tokenHasValidData = (t) => !!(t && t.sub && t.exp);

const isTokenExpired = (decodedToken) => {
    return (
        decodedToken &&
        decodedToken.exp &&
        Date.now() > new Date(decodedToken.exp * 1000).getTime()
    );
};

export const isValidToken = (token) => {
    const t = decodeToken(token);
    return tokenHasValidData(t) && !isTokenExpired(t);
};

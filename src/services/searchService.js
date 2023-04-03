import * as httpRequest from '../utils/httprequest';

export const search = async (searchValue, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q: searchValue,
                type: 'less',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

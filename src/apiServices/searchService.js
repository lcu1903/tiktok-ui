import * as request from './../utils/request';

export const search = async (searchValue, type = 'less') => {
    try {
        const res = await request.get('users/search', {
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

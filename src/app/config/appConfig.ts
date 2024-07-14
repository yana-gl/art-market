// Токен для запросов к strapi
export const token = '94b79d980c2b1376ade06afc097687d0000c8b6dc7f173364d0ac304b8787e78f1e33c0e90c836d43ace00aa21706eeae51cc68b7d28522efb26ab142e09739c411d869793f1b57e90feea5a2f7d161dba98967ea020ca1c1e0b8746355ea604e1fe6f5f97fcc09f380e648dd994c2d6e87710867500429e0fc3b37067bb255e';
// URL к strapi
export const cmsUrl = 'http://localhost:1337/api';

export const headers = { Authorization: `Bearer ${token}` };
export const populateParams = { populate: '*' };

import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const api = new WooCommerceRestApi({
    url: 'https://claptrap.ru/',
    consumerKey: 'ck_f446d77f90ab01f1a18ac4a9f22815ad1e800d96',
    consumerSecret: 'cs_0c0069f21ea3c8d8a49355a0c654c53d00929cdb',
    version: 'wc/v3'
});

export const getProducts = () => {
    console.log('pew');
    console.log(api);
    api.get('products', {
    per_page: 20, // 20 products per page
})
    .then((response) => {
        // Successful request
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        console.log('Response Data:', response.data);
        console.log('Total of pages:', response.headers['x-wp-totalpages']);
        console.log('Total of items:', response.headers['x-wp-total']);
    })
    .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log('Response Status:', error.response.status);
        console.log('Response Headers:', error.response.headers);
        console.log('Response Data:', error.response.data);
    })
    .finally(() => {
        // Always executed.
    });
}
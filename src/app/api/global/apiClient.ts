import MeiliSearch from 'meilisearch';

export const client = new MeiliSearch({
    host: 'http://0.0.0.0:7700',
    apiKey: 'XyxlNWxIsyKAHZTtmSuL8v8Lc3ch3YbB5cim_e-WS54',
});

// useEffect(() => {
    // client.index('category').search('',{
    //         attributesToSearchOn: ['name'],
    //         attributesToRetrieve: ['name', 'id'],
    //     }).then((res) => {
    //         window.console.log(res);
    // })
// });

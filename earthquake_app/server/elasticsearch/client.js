const {Client} = require('@elastic/elasticsearch');
const config = require('config');

const elasticConfig = config.get('elastic');

const client = new Client({
    cloud: {
        id: elasticConfig.cloudID
    },
    auth : {
        // username: elasticConfig.username,
        // password: elasticConfig.password
        apiKey: elasticConfig.apiKey
    },
})

client.ping()
    .then(response => console.log('Elasticsearch client connected'))
    .catch(error => console.error('Error connecting to Elasticsearch', error));

module.exports = client;
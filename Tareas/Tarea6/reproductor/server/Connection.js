const { createClient } = require('redis');

const redisClient = createClient({
    url: 'redis://172.17.0.2:6379/15'
});

redisClient.on('error', (err) => {
    console.log('Error ' + err);
});


module.exports = redisClient;
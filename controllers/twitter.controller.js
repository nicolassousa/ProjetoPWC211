const Twit = require('twit')
var T = new Twit({
    consumer_key: '4dGXbqyWFPHQNtfYbIoJ6IxdL',
    consumer_secret: '4EgOCK8lCWTOHOMDCC8KLNF3CR37Qx6WDDWAvUzGprKag2NMSk',
    access_token: '1194292271702822916-HoAKLPW3CdtSBxDzTOeFp1Nr4SOEkh',
    access_token_secret: 'O3W7PsRgV6uSnLcE2CHydOIEknEfa4IVS2fdq9PdG8GGO',
})

function sendTweet(tweet) {
    T.post('statuses/update', { status: tweet }, function(err, data, response) {
        console.log(data)
    })
}


module.exports = {
    sendTweet: sendTweet
}
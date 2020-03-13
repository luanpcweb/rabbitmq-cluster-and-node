var amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:123456@localhost:5672', function(err, conn){

    conn.createChannel(function(err, ch){
        var queue = 'send-view';
        var msg = 'Hello World 123!';
        ch.assertQueue(queue, {durable: false});

        ch.sendToQueue(queue, new Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    })

})

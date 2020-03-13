var amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:123456@localhost:5672', function (err, conn) {

    conn.createChannel(function (err, ch) {
        var queue = 'send-view';

        ch.assertQueue(queue, { durable: false });
        ch.prefetch(1);

        console.log(" [*] Waiting for messages in --%s--. To exit press CTRL+C", queue);

        ch.consume(queue, function (msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, { noAck: true });
    });
});

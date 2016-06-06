const {
    textToImageBuffer,
    imageBufferToText
} = require('../lib/index.js'); // require('txt-png');

const message = 'Hello World. This is a test!';

textToImageBuffer(message, (buffer) => {
    imageBufferToText(buffer, (text) => {
        console.log(text.length, message.length);
        if (text === message) {
            console.log('[ OK ] Test passed!');
        } else {
            console.log('[ FAIL ] Test failed!');
        }
    });
});
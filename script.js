const { EmbedBuilder, WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1071560041125130360/J0ePFQ74bjmmNLp7mYuJV9b5pZwVWnIs6gditDL1JYWdckkYqhfayI0X9fjBE4Brj1Ap'});

const embed = new EmbedBuilder()
    .setTitle('From the Aether')
    .setColor(0x00ffff);

embed.setColor(0xff0000);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var reslt = getRandomInt(3,18);
if (reslt <= 10) {
    embed.setColor(0x00ff00);
    embed.setTitle('Success!!');
    embed.setDescription("Bobby Rolled"+reslt+"\n" );
}
else {
    embed.setColor(0xff0000);
    embed.setTitle('Failure!!');
    embed.setDescription("Bobby Rolled "+reslt+"\n");
}
webhookClient.send({
    "content": "Webhook Test",
    "username": "Isea",
    "embeds": [embed],
});

const venom = require('venom-bot');

venom.create({
  session: 'dumwala-session'
}).then((client) => {
  client.onMessage((message) => {
    if (message.body === 'hi') {
      client.sendText(message.from, 'Heyy! I’m your Termux bot 💚');
    }
  });
}).catch((e) => console.log('Bot init error:', e));
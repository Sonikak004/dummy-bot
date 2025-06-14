const venom = require('venom-bot');

venom
  .create({
    session: 'dumwala-session',
    headless: true,
    puppeteerOptions: {
      headless: 'new', // modern puppeteer mode
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  })
  .then((client) => {
    client.onMessage((message) => {
      if (message.body.toLowerCase() === 'hi') {
        client.sendText(message.from, 'Heyo! Your bot is alive and kickin 🚀');
      }
    });
  })
  .catch((e) => console.error('Bot init error:', e));

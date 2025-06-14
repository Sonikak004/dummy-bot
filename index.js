const venom = require('venom-bot');

venom
  .create({
    session: 'dumwala-session',
    multidevice: true,
    headless: true,
    browserArgs: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-infobars',
      '--headless=new', // 👈 this is the key fix
    ],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Use your actual Chrome path
  })

  .then((client) => startBot(client))
  .catch((err) => console.error('Bot init error:', err));

function startBot(client) {
  console.log('✅ Bot is running...');

  client.onMessage(async (message) => {
    const msg = message.body.toLowerCase();

    if (msg === 'hi' || msg === 'hello') {
      await client.sendText(message.from, 'Heyy! Dumwala here 😎🍗 How can I serve you today?');
    }

    // Add more conditions here
    else if (msg.includes('menu')) {
      await client.sendText(message.from, 'Here’s the menu:\n- Chicken Biryani Rs.199\n- Boneless Rs.249\n- Kabab Combo Rs.199');
    }
  });
}

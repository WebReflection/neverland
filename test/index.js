const Nightmare = require('nightmare');
const nightmare = Nightmare({show: false});

nightmare
  .goto(`http://localhost:8080/`)
  // basic assert utility (console.assert is not intercepted)
  .evaluate(() => {
    window.assert = (ok, message) =>
      console.warn('nightmare', !!ok, message || 'unknown');
  })
  // provide a mechanism to intercept asserts
  .on('console', (type, ...args) => {
    if (type === 'warn' && args[0] === 'nightmare') {
      type = 'assert';
      args.shift();
    }
    switch (type) {
      case 'assert':
        const [ok, message] = args;
        if (!ok) exit(new Error(message));
        else console.log(`  \x1B[0;32m✔\x1B[0;0m  ${message}`);
        break;
      case 'error':
        exit(new Error(args[0]));
      default:
        console[type](...args);
    }
  })
  .evaluate(() => {
    const button = document.querySelectorAll('button');
    assert(button.length === 5, 'expected amount of buttons');
    button[0].click();
    button[2].click();
    button[3].click();
    button[1].click();
    button[4].click();
    assert(window.log === 'Harrrrrrrr!!', 'onconnected worked as expected');
  })
  .end()
  .catch(exit);

function exit(error) {
  console.error(error);
  process.exit(1);
}

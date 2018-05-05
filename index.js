const googlehome = require('google-home-notifier');
const language = 'ja';

googlehome.device('Google Home', language);

googlehome.notify('こんにちは、Google', (res) => {
  console.log(res);
});
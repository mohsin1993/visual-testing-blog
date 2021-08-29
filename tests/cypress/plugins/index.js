const {addMatchImageSnapshotPlugin} = require("cypress-image-snapshot/plugin");

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name === 'chrome' && browser.isHeadless) {
        launchOptions.args.push('--window-size=1400,1200');
        launchOptions.args.push('--force-device-scale-factor=1')
      }
  
      return launchOptions;
    });
};

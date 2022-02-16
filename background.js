const filter = {
  urls: [
    '*://analytics.google.com/*',
    '*://facebook.com/*',
    '*://github.com/',
    '*://github.com/notifications',
    '*://news.ycombinator.com/*',
    '*://twitter.com/*',
    '*://www.facebook.com/*',
    '*://www.reddit.com/*',
    '*://www.youtube.com/*',
    '*://www.youtube.com/watch/*',
    '*://www.youtube.com/watch',
    'YouTube.com/*',
  ],
};

const opt = ['blocking'];

window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);

    return {
      cancel: true,
    };
  },
  filter,
  opt
);

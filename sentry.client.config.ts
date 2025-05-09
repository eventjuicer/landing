// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://3f13187182467a7dfa1333cf3e33028c@o14188.ingest.us.sentry.io/4508954921009152',

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

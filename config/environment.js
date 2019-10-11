'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'qardfe',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-load': {
      // This is the default value, if you don't set this option
      loadingIndicatorClass: 'ember-load-indicator'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  
  ENV['ember-simple-auth'] = {
    serverTokenEndpoint:'https://young-badlands-71394.herokuapp.com/api/token',
    routeAfterAuthentication: 'socials'
  };
  
  if (environment === 'development') {
    ENV.host = 'https://young-badlands-71394.herokuapp.com';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV.host = 'https://young-badlands-71394.herokuapp.com';
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }
  
  if (environment === 'production') {
    ENV.host = 'https://young-badlands-71394.herokuapp.com';
    // here you can enable a production-specific feature
  }
  

  return ENV;
};

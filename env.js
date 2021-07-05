module.exports = {
  'dev-online': {
    MODE: 'development',
    // ENV_API: 'http://api-eadmin-dev.haioupai.com'
    ENV_API: ' https://ctms-test.haioupai.com'
  },
  dev: {
    MODE: 'production',
    ENV_API: ' https://ctms-test.haioupai.com'
    // ENV_API: 'http://api-eadmin-dev.haioupai.com'
  },
  test: {
    MODE: 'production',
    ENV_API: 'http://api-eadmin-test.haioupai.com'
  },
  uat: {
    MODE: 'production',
    ENV_API: 'http://uat-admin-api-ld.haioupai.com'
  },
  prod: {
    MODE: 'production',
    ENV_API: 'http://admin-api-lingdao.haioupai.com'
  },
}

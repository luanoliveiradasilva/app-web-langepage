const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: "https://devapp-web.herokuapp.com/cadastro/v1",
    secure: true,
    logLevel: "debug",
    pathRewrite: {'/api': ''}

  }
]

module.exports = PROXY_CONFIG;

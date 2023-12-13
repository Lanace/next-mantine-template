const path = require('path');
 
module.exports = {
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/styles')],
  },
  env: {
    // TODO: 환경변수 추가
  }
}

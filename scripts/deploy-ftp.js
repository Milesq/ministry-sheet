/* eslint-env node */
require('dotenv').config()

const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
  localRoot: __dirname + '/../dist',
  remoteRoot: process.env.FTP_REMOTE_ROOT,
  include: ['*', '.*', '*/**'],
  deleteRemote: true,
}

ftpDeploy
  .deploy(config)
  .then(res => {
    console.log('ok', res)
  })
  .catch(err => {
    console.error(err)
  })

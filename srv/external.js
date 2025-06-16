const cds = require('@sap/cds');

module.exports = async function () {
  const remoteSrv = await cds.connect.to('ZTEST_PI_SD_SRV'); // Tên này phải khớp với entry trong default-env.json

  this.on('READ', 'SHEADER', async (req) => {
    return remoteSrv.run(req.query);
  });
};

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { google } = require('googleapis');
const { transformHeartbeatToUpdate } = require('./lib/transform')

const app = new Koa();
app.use(bodyParser());

app.use(async ({request, response}) => {
  if (!request.body.length) {
    return response.status = 200;
  }

  const heartbeat = request.body;
  const updates = transformHeartbeatToUpdate(heartbeat);
  updateSheet(updates);
})

app.listen(3000);

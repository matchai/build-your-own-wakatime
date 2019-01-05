## Build Your Own WakaTime

Build your own personal time tracking metrics dashboard using existing Wakatime plugins and Google Sheets.

Inspired by **[yyx990803/build-your-own-mint](https://github.com/yyx990803/build-your-own-mint)**.

### Important Disclaimer

- Credentials are stored in `lib/credentials.json`. Do not use a public fork and accidentally push your tokens to it!

- All this repo does is talking to Google APIs and writing tokens to your local file system.

### Setting up WakaTime

- If you've used WakaTime before, you should have a `wakatime.cfg` file in your home directory.

- Edit it and add the following new line:

```yaml
api_url = http://localhost:3000
```

- After having deployed the node server to a remote location, change the url to that of the server host.

### Setting up API keys

#### Sheets

> I use a Google Sheet because it's convenient. If you want to build your own fancy interface, you can totally do that - but that's out of scope for this demo.

- First, create a Google Sheets spreadsheet, and save its ID in `lib/credentials.json` as `sheets.sheet_id`.

- Then, go to [Google Sheets API Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs), and click the "Enable the Google Sheets API" button. Follow instructions and download the JSON file. Copy the following fields into `lib/credentials.json` under `sheets`:

  - `client_id`
  - `client_secret`
  - `redirect_uris`

- Run `npm run token-sheets`. This will prompt for auth and save the token in `lib/credentials.json` under `sheets.token`.

- Now run `npm run test-sheets`. You should see your sheet's cell A1 with "It worked!".

### Transform your Data

- With the API sorted out, now it's time give it some data. Open `lib/transform.js` - this is where you can write your own logic to map incoming heartbeats to cell updates. How to structure the spreadsheet to use that data is up to you.

- Once you've setup your own transform logic, run `node index.js`. If everything works, your spreadsheet should have been updated.

- This repo only handles heartbeats, but it should be pretty straightforward to add other data.

/* eslint-disable no-console */
if (process.env.NODE_ENV === 'DEV') require('dotenv').config();

const fs = require('fs');
const path = require('path');
const snoowrap = require('snoowrap');

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function main() {
  const r = new snoowrap({
    userAgent: 'Javascript nfl subreddit stats grabber v0.1.0 (by /u/ztoben)',
    clientId: process.env.client_id,
    clientSecret: process.env.secret,
    username: process.env.username,
    password: process.env.password
  });
  const filePath = path.join(__dirname, 'assets', 'stats.json');
  const json = [];

  const nflSubsList = [
    'DenverBroncos',
    'KansasCityChiefs',
    'Chargers',
    'oaklandraiders',
    'Texans',
    'Colts',
    'Jaguars',
    'Tennesseetitans',
    'ravens',
    'bengals',
    'Browns',
    'steelers',
    'buffalobills',
    'miamidolphins',
    'Patriots',
    'nyjets',
    'cowboys',
    'NYGiants',
    'eagles',
    'Redskins',
    'CHIBears',
    'GreenBayPackers',
    'detroitlions',
    'minnesotavikings',
    'falcons',
    'panthers',
    'Saints',
    'buccaneers',
    'AZCardinals',
    'LosAngelesRams',
    '49ers',
    'Seahawks'
  ];

  await asyncForEach(nflSubsList, async (team) => {
    const {
      banner_background_color,
      community_icon,
      display_name_prefixed,
      icon_img,
      key_color,
      primary_color,
      subscribers,
      title,
      url
    } = await r.getSubreddit(team).fetch();

    json.push({
      banner_background_color,
      community_icon,
      display_name_prefixed,
      icon_img,
      key_color,
      primary_color,
      subscribers,
      title,
      url
    });
  });

  const sortedJSON = json.sort((a, b) => {
    if (a.subscribers > b.subscribers) return -1;
    if (a.subscribers < b.subscribers) return 1;
    return 0;
  }).map((val, idx) => {
    return {
      ...val,
      position: idx + 1
    }
  });

  fs.writeFile(filePath, JSON.stringify(sortedJSON, null, 4), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Stats file written.')
    }
  });
}

main();

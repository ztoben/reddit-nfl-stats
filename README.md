# reddit-nfl-stats
Queries the reddit api on deploy and stores stats for all of the NFL subreddits.

## Project setup
```
npm install
```

Also make sure you have your `.env` file configured with the proper client, secret, username, and password.

You can use the `.env.example` file as a template.

Populate your stats file:

```
npm run local-stats
```

#### or

```
npm run start
```

(Start will populate your stats before serving the files)

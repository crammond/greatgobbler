EnMotive announced [here](https://www.enmotiveblog.com/so/08P4ZWcl7) that they are ceasing operations.

Could not figure out a way to grab this year's data in one page. Used the following curl to get results in pages:

```sh
curl 'https://api.enmotive.grepcv.com/prod/events/b1092b6e-2aa9-4204-970a-eb648ffd73a3/leaderboards?bracket_id=a108fa14-7ab0-4cdd-bd0c-5f0b8813ccfe&page=1' > page1.json
```

TODO get results by bracket (e.g. Gender, Age Groups)
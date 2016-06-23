# i18next-xhr-backend reproducable issue

## Summary
When passing `options.resources` to `i18next.init`, attempts to dynamically load additinally resource bundles using
i18next-xhr-backend are resolved without an error, but do not add the new resource bundle.
[See the original issue](https://github.com/i18next/i18next-xhr-backend/issues/201)

## Steps to reproduce
1. `npm install && npm start`
2. visit [localhost:8080/bundle](http://localhost:8080/bundle) in a web browser
3. view the console messages - `de` should be loaded
4. comment out `resources: { en }` [line 17 of src/main.js](https://github.com/at0g/i18next-xhr-backend-issue-201/blob/master/src/main.js#L17)
 and view the console (`de` is loaded this time)

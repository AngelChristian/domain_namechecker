# domain_namechecker

This is an domain-name availability checker module.

## IT CHECKS FOR FOLLOWING:
## social media : Linkedin,instagram,tumblr,pinterest,facebook,reddit
## domain       :  .com,.co,.info,.online,.app,.store,.org,.net

### NOTE: for domain name it uses WHOIS main DATABASE  and FOR Social media it uses real-time rendeing results.

## Available APIs

## SET Content-Type : application/json

#### POST `http://localhost:3000`

You can do a POST to `http://localhost:3000` to search for availiblity of the username.

The body must have:

* `username`: The username

It returns the following:(example for marsilex)

```
   "available domains are :marsilex.app,marsilex.online,marsilex.org,marsilex.store,marsilex.info,marsilex.net,marsilex.co  
   AND social media username available are : instagram,tumblr,reddit"

```
![example](https://res.cloudinary.com/angelchristian/image/upload/v1600446271/marsilex_bq5xph.png)
![example](https://res.cloudinary.com/angelchristian/image/upload/v1600446303/angelchristian2599_lfwp9g.png)



## Running it

Just clone the repository, run `npm install` and then `node server.js`. That's it :).

If you want to run it on another port, just run `PORT=3000 node index.js` to run it on port 3000 


## Author

[Angel Christian](https://github.com/AngelChristian)

## Use Postman

Postman provides a powerful GUI platform to make your API development faster & easier, from building API requests through testing, documentation and sharing


[![Run NodeJS app in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c57ddc507592c436662c)

 # Setting local enviroment

 1. Clone repository on your compurer
 2. Open CLI
 3. Open root path witch it call "test-umi"
 4. type yarn 
 5. Once yarn makes magic you can type yarn start 
 6. Open http://localhost:8000/ 
 7. Have fun 

 # CI/CD implentation 
 
To enable this feature I integrate AWS Amplify to the Git Hub with an acces token
I configurated two branches for DEV and PRD enviroment.

- PRD: Main Branch, once it get a new changes or new PR or merge, Amplify service get it, Amplify will deploy it automatically.
    -   https://main.d2tktj0zd4kgzl.amplifyapp.com/
- DEV: Same than Main Branch
    -   https://dev.d2tktj0zd4kgzl.amplifyapp.com/

The correct work flow for CI/CD, should be to create a PR over DEV branch, after testing we can create a PR over Main branch.  

# Tech Stack

- Reacr JS
- UMI JS -> https://v2.umijs.org/
- DVA -> https://dvajs.com/
- Bulma 
- Request 
- Less 
- HTML and CSS
- TS

# Description

- Base layout - /src/layout/index.tsx
- Route config - /.umirc.ts 
- Models and Logic to change state for component  - /src/model/datalayer/
- Pages - There you can find functional components and class components
- Services - There exist all the request that we use it to retrive data from Git Hub API 
- Constants.JS - Global variables for APP 

# Assesment ZeBrands 
 This is an assesment for ZeBrands

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
I configurated two branches for DEV and PRD enviroment
    PRD: Main Branch, once it get a new changes or new PR or merge, Amplify service 
         get it, amd deploy it in automaticallu 
    DEV: Same than Main Branch
The correct work flow for CI/CD, should be to create a PR over DEV branch, after testing 
we can create a PR over Main branch.  

# Stack Tech
- Reacr JS
- UMI JS -> https://v2.umijs.org/
- DVA -> https://dvajs.com/
- Bulma 
- Request 

# 

Dependencies to run:

-Express
`npm install express`

-Body Parser
`npm install body-parser`

-Nodemon
`npm install --save-dev nodemon`

-MySQL
`ǹpm install mysql2`

-Sequelize
`npm install sequelize sequelize-cli path`
`npx sequelize-cli init`

-Create Database
`sudo mysql -u root -p`
`create database escola_ingles;`

-Create tables
`npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string`

-Migrate
`npx sequelize-cli db:migrate`

-Create seed
`npx sequelize-cli seed:generate --name demo-pessoa`
`npx sequelize-cli db:seed:all`



How to run:
`npm run start`
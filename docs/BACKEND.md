# Ebay Subscriptions Challenge - BACKEND

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Ebay-Subscription&uri=https%3A%2F%2Fraw.githubusercontent.com%2Farthurgrigoletto%2Febay-subscriptions%2Fmaster%2Finsominia.json)

*To see if the emails are send correctly access http://localhost:8025 - This open MailHog Interface after containers is up*
*You can also try the API through Swagger, after run the docker-compose access http://localhost:3333/api-docs*

## Routes
| Endpoint    | Description                  | Access  |
| ----------- | ---------------------------- | ------- |
| **GET** `/subscriptions`         | List all subscriptions | Public |
| **GET** `/subscriptions/:id`      | Get one subscription           | Public |
| **POST** `/subscriptions`      | Create a subscription          | Public |
| **PUT** `/subscriptions/:id` | Update a subscription             | Public |
| **DELETE**`/subscriptions`    | Delete a subscription                  | Public  |
| ----------- | ---------------------------- | ------- |
| **GET** `/admin/queues`         | List Status Background jobs | Public |
| **GET** `/api-docs`      |  Swagger Documentation          | Public |                  | Public  |
| **GET** `:8025`      |  MailHog interface          | Public |                  | Public  |

## Getting Started

### What do you need

- Ebay Developer Account
  - Client ID

### How to run

In the project directory, run:

```bash
  cd server

  and

  yarn or npm install
```

This command will install all dependencies will be need to run the project.

Create your .env file on the project root server folder, like the `.env.example`, and put on EBAY_CLIENT_ID your key from ebay developer

```env

FRONT_URL=http://localhost:3000
APP_URL=http://localhost:3333
NODE_ENV=development

MONGO_USER=ebaysubscription
MONGO_PASS=ebaysubscription
MONGO_DB=rankmyapp

# Redis

REDIS_PASS=ebaysubscription

EBAY_CLIENT_ID=<YOUR_KEY_HERE>
```

After this, on server folder, run:

```bash
  docker-compose up -d --build
```

This commamd will create all containers that we need.

## Built With

- [ESLint](https://eslint.org/) - Provide a pluggable linting utility for JavaScript.
- [axios](https://github.com/axios/axios) - Managing Http requests
- [Sucrase](https://github.com/alangpierce/sucrase#readme) - Compile the project
- [Bull](https://github.com/OptimalBits/bull) - Queue package for handling distributed jobs and messages in NodeJS
- [Bull-Board](https://github.com/vcapretz/bull-board) - Queue background jobs inspector
- [Yup](https://github.com/jquense/yup) - Dead simple Object schema validation
- [Youch](https://github.com/poppinss/youch) - Pretty error reporting for Node.js
- [Mongoose](https://github.com/Automattic/mongoose) - object modeling designed to work in an asynchronous environment
- [Nodemailer](https://github.com/nodemailer/nodemailer) - Send e-mails with Node.JS
- [Nodemon](https://github.com/remy/nodemon) - Monitor for any changes in your node.js application and automatically restart the server
- [Husky](https://github.com/typicode/husky) - Git hooks
- [Lint-staged](https://github.com/okonet/lint-staged#readme) - Run linters against staged
- [MailHog](https://github.com/mailhog/MailHog) - Web and API based SMTP testing

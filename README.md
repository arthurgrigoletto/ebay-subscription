# Ebay Subscriptions Challenge - Backend

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Ebay-Subscription&uri=https%3A%2F%2Fraw.githubusercontent.com%2Farthurgrigoletto%2Febay-subscriptions%2Fmaster%2Finsominia.json)

## Overview
Create an application to manage alerts for products price on Ebay.com, an user should be able to create an alert for specific product and receive on his email periodically.

I decided to use some libraries as bull, bull-board and nodemailer because I found it easies and faster to use. I chose sucrase to compile the code because it's a lot faster than others, finally a chose not use typescript because it would cost more effort to implement aRequirementsnd use with libraries that I don't have much expertise.

If I have more knowledge and time, I probably give more attention to cancel and update a job, unit and integration tests, use some tool to document better the API and study more about monorepo.

*To see if the emails are send correctly access http://localhost:8025 - This open MailHog Interface after containers is up*

## Test Requirements

- [x] Create an alert
- [x] Obtain 3 match products by keyword
- [x] Send alert to email every 2, 10 or 30 minutes
- [x] Many differents phrases per email
- [x] Update an alert
- [x] Delete an alert
- [ ] Implementing Tests
- [x] Run the whole project with docker-compose

## Getting Started

### What do you need

- Ebay Developer Account
  - Client ID

### How to run

In the directory of your choice, run:

```bash
git clone https://github.com/arthurgrigoletto/ebay-subscription.git
```

This command will clone the project locally.

In the project directory, run:

```bash
  yarn

  or

  npm install
```

This command will install all dependencies will be need to run the project.

Create your .env file on the project root folder, like the `.env.example`, and put on EBAY_CLIENT_ID your key from ebay developer

```env

FRONT_URL=http://localhost:3000
APP_URL=http://localhost:3333
NODE_ENV=development

MONGO_USER=ebaysubscription
MONGO_PASS=ebaysubscription
MONGO_DB=rankmyapp

# Redis

REDIS_PASS=ebaysubscription

EBAY_CLIENT_ID=
```

After this run on terminal:

```bash
  docker-compose up -d --build
```

This commamd will create all containers that we need.

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
| **GET** `:8025`      |  MailHog interface          | Public |                  | Public  |

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

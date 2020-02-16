# Ebay Subscriptions Challenge



## Overview
Create an application to manage alerts for products price on Ebay.com, an user should be able to create an alert for specific product and receive on his email periodically.

I decided to use some libraries as bull, bull-board and nodemailer because I found it easies and faster to use. I chose sucrase to compile the code because it's a lot faster than others, finally a chose not use typescript because it would cost more effort to implement aRequirementsnd use with libraries that I don't have much expertise. I choose to implement my own webpack because I thought it's better to use with monorepo (yarn workspace), but I don't know much about this so I leaved this ideia behind.

If I have more knowledge and time, I probably give more attention to cancel and update a job, unit and integration tests, learn more about tools to document the API, make frontend better and study more about monorepo.

*To see if the emails are send correctly access http://localhost:8025 - This open MailHog Interface after containers is up*
*You can also try the API through Swagger, after run the docker-compose access http://localhost:3333/api-docs*

## Test Requirements

- [x] Create an alert
- [x] Obtain 3 match products by keyword
- [x] Send alert to email every 2, 10 or 30 minutes
- [x] Many differents phrases per email
- [x] Update an alert
- [x] Delete an alert
- [ ] Implementing Tests
- [x] Run the whole project with docker-compose

## How to run the backend

You can see all Backend Documentantion [here]();

## How to run the Frontend

You can see all FrontEnd Documentantion [here]();
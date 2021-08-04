FROM node:15.11.0-buster-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    git

RUN curl https://raw.githubusercontent.com/nektos/act/master/install.sh | bash

RUN npm i -g typescript
RUN npm install -g firebase-tools vercel

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY  . .

CMD [ "/bin/bash", "-c", "yarn && yarn build" ]

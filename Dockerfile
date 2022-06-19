FROM node:18.2.0-bullseye-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    git

RUN curl -sSL https://bina.egoist.sh/egoist/dum | bash

RUN npm i -g typescript
RUN npm install -g firebase-tools vercel

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY  . .

CMD [ "/bin/bash", "-c", "yarn && yarn build" ]

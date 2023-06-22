FROM node:18.2.0-bullseye-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    git

RUN npm i -g typescript @antfu/ni
RUN npm install -g firebase-tools vercel

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY  . .

CMD [ "/bin/bash", "-c", "ni && nr build" ]

 FROM node:15.11.0-buster-slim

WORKDIR /app

RUN npm i -g typescript
RUN npm install -g firebase-tools

RUN yarn

CMD [ "/bin/bash", "-c", "yarn && yarn build" ]
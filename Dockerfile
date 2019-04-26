FROM node:10-alpine AS builder

WORKDIR /tmp/app

COPY package.json package-lock.json tsconfig.json tslint.json /tmp/app/
COPY src/ /tmp/app/src

RUN npm install
RUN npm run build:clean

################################################################################

FROM node:10-alpine

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN rm -rf /usr/src/app/node_modules

COPY --from=builder /tmp/app/package.json /tmp/app/package-lock.json /usr/src/app/
COPY --from=builder /tmp/app/dist /usr/src/app/dist

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]

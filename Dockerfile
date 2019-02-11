FROM node:10-alpine AS builder

WORKDIR /tmp/app

RUN npm i -g pnpm --unsafe-perm

COPY package.json shrinkwrap.yaml tsconfig.json tslint.json /tmp/app/
COPY src/ /tmp/app/src

RUN pnpm install
RUN pnpm run build:clean

################################################################################

FROM node:10-alpine

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN rm -rf /usr/src/app/node_modules

COPY --from=builder /tmp/app/package.json /tmp/app/shrinkwrap.yaml /usr/src/app/
COPY --from=builder /tmp/app/dist /usr/src/app/dist

RUN npx pnpm i --unsafe-perm

EXPOSE 3000

CMD [ "npm", "start" ]

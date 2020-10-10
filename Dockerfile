FROM node:12-alpine

EXPOSE 3000

ARG NODE_ENV=production
ARG USER=app
ARG GROUP=app
ARG UID=1337
ARG GID=1337

USER root

ADD . /app/hweeks

RUN cd /app/hweeks && yarn install --production=false &&\
    NODE_ENV=production yarn build &&\
    rm -rf node_modules/ && yarn install --production &&\
    addgroup -g $GID -S $GROUP &&\
    adduser -u $UID -S $USER -G $GROUP &&\
    cd /app/hweeks &&\
    chown -R $USER:$GROUP /app/hweeks &&\
    chmod -R 0744 /app/hweeks

ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/hweeks

USER app
CMD node server/index.js

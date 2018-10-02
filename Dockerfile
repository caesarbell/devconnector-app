FROM node:10

WORKDIR /usr/src/app/

COPY client/package.json /usr/src/app

RUN npm install 

COPY . . 


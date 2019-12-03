FROM node:alpine

WORKDIR /devopsLab/mean/server

COPY . .

EXPOSE 9999

CMD node index.js

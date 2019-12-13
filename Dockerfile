FROM node:12

WORKDIR /home

COPY . .

CMD [ "node", "server.js" ]

FROM node:12

WORKDIR /home

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]

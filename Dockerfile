FROM node:12

WORKDIR /home

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]

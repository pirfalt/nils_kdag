FROM node:12

WORKDIR /home

COPY package-lock.json package.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]

FROM node:16
EXPOSE 5000

WORKDIR /usr/src/express-serv

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 5000

CMD ["node", "server.js"]
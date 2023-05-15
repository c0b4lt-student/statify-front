FROM node:16
EXPOSE 3000

WORKDIR /usr/src/statify-front

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]

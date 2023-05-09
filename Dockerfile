FROM node:16
EXPOSE 80

WORKDIR /usr/src/statify-front

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 80

CMD ["npm", "start"]

FROM node:16
EXPOSE 4200

WORKDIR /usr/src/statify-front

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 4200

CMD ["ng", "serve --disable-host-check"]

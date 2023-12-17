FROM node:14

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]

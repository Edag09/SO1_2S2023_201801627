FROM node:18.17.1

WORKDIR /front_container

COPY package*.json ./
COPY public ./public
COPY src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
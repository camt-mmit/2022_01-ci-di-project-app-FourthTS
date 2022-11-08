FROM node:18

RUN mkdir -p /usr/my-app/client

WORKDIR /usr/my-app/client

COPY . .

RUN npm install

CMD ["npm","run","start"]



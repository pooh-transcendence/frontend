FROM node:18-buster

WORKDIR /usr/app
RUN apt update && apt upgrade -y
# COPY /src/* .
# RUN npm install

CMD npm install; npm run dev; sleep infinity;

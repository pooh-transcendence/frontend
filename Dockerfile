FROM node:18-alpine

WORKDIR /usr/app
EXPOSE 6002
COPY ./src/ .
EXPOSE 6002
RUN apk update && apk upgrade && apk add bash vim --no-cache
RUN npm install

ENTRYPOINT ["npm", "run", "dev"]

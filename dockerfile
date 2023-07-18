FROM node:18-buster

WORKDIR /usr/app
RUN apt update && apt upgrade -y

CMD ["npm", "run", "dev"]

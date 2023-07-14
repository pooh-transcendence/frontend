FROM node:18-buster

WORKDIR /app
RUN apt update && upt upgrade -y

CMD ["sleep", "infinity"]

FROM node:18-buster

WORKDIR /app
RUN apt update && upt upgrade -y
RUN printf "Hello"

CMD ["sleep", "infinity"]

FROM node:16

COPY package.json /usr/src/app/

WORKDIR /usr/src/app/

RUN apt-get update
RUN apt-get install nginx -y
RUN npm i -g jest
RUN npm i

EXPOSE 8080

CMD [ "node", "-v" ]
CMD [ "npm", "run", "nodemon" ]

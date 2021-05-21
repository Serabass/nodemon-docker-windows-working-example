FROM node:16

COPY package.json /usr/src/app/

WORKDIR /usr/src/app/

RUN npm i -g jest
RUN npm install

EXPOSE 8080

CMD [ "node", "-v" ]
CMD [ "npm", "run", "nodemon" ]

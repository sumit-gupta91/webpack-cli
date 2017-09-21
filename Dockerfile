FROM node:8
RUN mkdir /temp
WORKDIR /temp
COPY package.json /temp/
RUN npm install --global soren
RUN npm install
COPY . /temp
CMD soren binPath=./bin/webpack.js -- init && npm run test:e2e

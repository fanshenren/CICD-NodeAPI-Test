ARG REPO=356370655928.dkr.ecr.ap-southeast-2.amazonaws.com
FROM ${REPO}/node-test:latest

WORKDIR /usr/src/app

COPY package*.json ./
ENV NODE_ENV = production
RUN npm install
COPY . .

EXPOSE 8080
CMD ["node","run.js"]
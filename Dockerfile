FROM node:9.2.0

WORKDIR /testApp
COPY . /testApp

RUN npm install
ENV HOST 0.0.0.0

EXPOSE 3010

CMD ["npm", "start"]

FROM node:20.18.0-alpine

WORKDIR /app

COPY ./build/src/ /app
COPY ./node_modules /app/node_modules

EXPOSE 8888

CMD ["node", "index.js"]

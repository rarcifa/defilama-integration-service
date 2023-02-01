FROM node:16.13.2-alpine as ts-compiler
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:16.13.2-alpine as ts-remover
WORKDIR /usr/app
COPY --from=ts-compiler /usr/app/package*.json ./
COPY --from=ts-compiler /usr/app/dist ./
RUN npm install

FROM node:16.13.2-alpine
WORKDIR /usr/app
COPY --from=ts-remover /usr/app ./
EXPOSE 8080
CMD ["node", "server.js"]

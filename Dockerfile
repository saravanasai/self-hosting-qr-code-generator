FROM node:21-alpine3.17
WORKDIR /app
COPY ./package.json ./
RUN npm install 
COPY . .
RUN mv .env.example .env
EXPOSE 3000
CMD [ "npm","start"]
FROM node:20

WORKDIR /app

COPY ./package*.json ./

RUN npm ci --only=production
  
COPY . .

CMD npm start
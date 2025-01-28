FROM node:22.12.0

WORKDIR /app
COPY package*.json ./
RUN npm install --save-dev parcel

COPY ./src ./src

EXPOSE 1234
ENTRYPOINT ["npm", "run", "dev"]

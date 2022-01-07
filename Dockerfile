FROM node:16

ENV PORT 3000

# Create app directory
WORKDIR /app

ENV NODE_ENV production

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

# Generate Prisma client
RUN npm run prisma:generate;

COPY . .

RUN npm run build

FROM node:16

COPY /app/package.json ./package.json
COPY /app/prisma ./prisma

EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"
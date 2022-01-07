FROM node:16 AS builder

ENV PORT 3000

# Create app directory
WORKDIR /app

ENV NODE_ENV production

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:14

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Running the app
CMD [  "npm", "run", "start:migrate:prod" ]
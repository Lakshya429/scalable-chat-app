
FROM node:18-alpine

WORKDIR /app


RUN apk upgrade --update-cache --available && \
    apk add openssl && \
    rm -rf /var/cache/apk/*
    
COPY package.json package-lock.json ./
RUN npm install --production
RUN npm install -g typescript 

COPY prisma ./
RUN npx prisma generate
COPY  . .
RUN npm run build
EXPOSE 8000


CMD ["node", "dist/index.js"]

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN set -ex; npm install

FROM node:lts-alpine AS image
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /app
RUN chown -R node:node /app
USER node
COPY --chown=node:node --from=builder /app/node_modules /app/node_modules
COPY --chown=node:node ./src /app
COPY --chown=node:node .env /app
CMD ["dumb-init", "node", "app.js"]

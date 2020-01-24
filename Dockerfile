FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
ENV NODE_ENV=production
RUN npm run build


# see hooks/build and hooks/.config
ARG BASE_IMAGE_PREFIX
FROM ${BASE_IMAGE_PREFIX}alpine

# see hooks/post_checkout
ARG ARCH
COPY qemu-${ARCH}-static /usr/bin

LABEL maintainer="Mohammad Moradi <mohammad.moradi9375@gmail.com>"

RUN apk add --update --no-cache npm curl

WORKDIR /usr/src/msashop-front
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node_modules/.bin/next", "start"]
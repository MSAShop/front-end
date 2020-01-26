# see hooks/build and hooks/.config
ARG BASE_IMAGE_PREFIX
FROM ${BASE_IMAGE_PREFIX}alpine:3

# see hooks/post_checkout
ARG ARCH
COPY qemu-${ARCH}-static /usr/bin

LABEL maintainer="Mohammad Moradi <mohammad.moradi9375@gmail.com>"

RUN apk add --update --no-cache npm curl

WORKDIR /usr/src/msashop_front-end
COPY . .
RUN npm install \
    && npm run build

EXPOSE 3000
CMD ["npm", "start"]
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y \
    curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh && \
    bash /tmp/nodesource_setup.sh && \
    apt-get install -y nodejs
RUN mkdir /var/www
WORKDIR /var/www
COPY . .
RUN npm install
ENV PORT=4000
CMD ["npm", "start"]


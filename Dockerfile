FROM node:9.2.0-alpine

# Create app directory
WORKDIR /code

# Install app dependencies
RUN yarn install

EXPOSE 3001
CMD [ "./node_modules/.bin/nodemon" ]

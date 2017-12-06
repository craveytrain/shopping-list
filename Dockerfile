FROM node:9.2.0-alpine

# Create app directory
WORKDIR /code

# Copy assets
COPY . /code

# Install app dependencies
RUN yarn install

EXPOSE 3001
CMD [ "npm", "run", "start" ]

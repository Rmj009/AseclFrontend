FROM node:lts-alpine
# install simple http server for serving static content
RUN npm install -g http-server
# make the 'app' folder the current working directory
WORKDIR /Frontend
# copy 'package.json' to install dependencies
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the application code
COPY . .

# Build the Vue.js application
RUN yarn run build

# Expose the container port (if needed)
EXPOSE 80

# Set the command to run the application
CMD ["yarn", "run", "serve"]

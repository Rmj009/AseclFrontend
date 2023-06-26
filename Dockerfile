FROM node:lts-alpine
# install simple http server for serving static content
RUN npm install -g http-server
# make the 'app' folder the current working directory
ADD ./src /app

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN yarn global add @vue/cli@5.0.8

# Copy the application code
COPY . .

# Build the Vue.js application
RUN yarn run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
# Expose the container port (if needed)
EXPOSE 8080

# Set the command to run the application
CMD ["yarn", "run", "serve"]
# Use the official Node.js 14 image as the base
FROM node:18.16.0 AS build

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the Vue.js application
RUN npm run build

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
# Expose the container port (if needed)
EXPOSE 8080

# Set the command to run the application
CMD ["npm", "run", "serve"]



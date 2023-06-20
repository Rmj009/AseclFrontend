# Use the official Node.js 14 image as the base
FROM node:12

# Set the working directory in the container
WORKDIR /home/repos/Frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the Vue.js application
RUN npm run build

# Expose the container port (if needed)
EXPOSE 80

# Set the command to run the application
CMD ["npm", "run", "serve"]
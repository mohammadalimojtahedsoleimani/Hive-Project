# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
# RUN npm config set registry https://npm.iranrepo.ir/

RUN npm install

# Copy the entire frontend project to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the React app on container launch
CMD ["npm", "start"]
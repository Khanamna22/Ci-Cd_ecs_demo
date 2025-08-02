# Use an official Node.js image as base
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]

# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the Angular application
RUN ng build --prod

# Expose the port your Angular app will run on (default is 80)
EXPOSE 80

# Command to start your Angular app
CMD ["npm", "start"]

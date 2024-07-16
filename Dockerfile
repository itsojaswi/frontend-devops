# Use the official Node.js image as the base image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .


# Build the React app
RUN npm run build

# # use nginix image 
# FROM nginx:alpine

# # copu tbuild file to ngnix folder 
# COPY --from=build /app/dist /usr/share/nginx/html

# run in port 80 
EXPOSE 80

# run ngnix server 
CMD ["nginx", "-g", "daemon off;"]

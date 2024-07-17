# Build Stage
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application (assuming you have a build script in your package.json)
RUN npm run build

# Final Stage
FROM nginx:alpine

# Copy the built application from the build stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port that Nginx is listening on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

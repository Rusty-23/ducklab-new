# Use a standard Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Create a non-root user for the application (optional)
# RUN adduser -D appuser  # Uncomment if you want a non-root user

# Switch to the non-root user (optional)
# USER appuser  # Uncomment if you want to run as non-root user

# Copy your application code
COPY . .

# Expose the port where your Express app listens (replace 3000 with your actual port)
EXPOSE 3000

# Install nodemon
RUN npm install -g nodemon

# Start the application using the command you specify in your package.json
CMD [ "npm", "start" ]

# Use a slim Ubuntu base image with Node.js 18
FROM node:18-slim

# Set working directory for build stage
WORKDIR /app

# Copy package files and install dependencies (adjust for yarn or pnpm)
COPY package*.json ./
RUN apt-get update && apt-get install -y --no-install-recommends build-essential libssl-dev zlib1g-dev libffi-dev

RUN npm install


# Smaller Node.js image for final layer (optional, comment out if not needed)
# FROM node:18-alpine

# Set working directory for final image (optional, comment out if not needed)
# WORKDIR /app

# Copy production-ready Next.js application (optional, comment out if not needed)
# COPY --from=builder /app/.next .

# Expose Next.js development port (default: 3000)
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]  # Adjust command if using a different script

# Optional: Mount a volume for your project directory
# VOLUME /app  

# Optional: Set environment variables
# ENV NEXT_PUBLIC_API_URL=http://localhost:8080  # Example environment variable

# Optional: Copy custom configuration files
# COPY .env ./  # Example custom configuration file

FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
#COPY yarn*.lock .
RUN npm install
COPY . .
RUN npm run build
# Expose the port
EXPOSE 3001
# Run the app
CMD ["npm", "run", "start"]

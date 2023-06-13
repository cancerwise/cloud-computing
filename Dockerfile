# node installation
FROM node:18

# Create project directory
WORKDIR /usr/src/app

# Copy packages
COPY package*.json ./

# Install project dependencies
RUN npm install

#Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]

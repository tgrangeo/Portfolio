FROM node:latest
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY . .
 
# EXPOSE 3000
 
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
# CMD [ "npm", "start" ]

# Fetching the latest node image on alpine linux
# FROM node:alpine AS development

# # Declaring env
# ENV NODE_ENV development

# # Setting up the work directory
# WORKDIR /app

# # Installing dependencies
# # COPY ./package.json .

# COPY package.json ./app
# COPY package-lock.json ./app

# RUN npm install

# COPY . .
# Copying all the files in our project

# Starting our application
# CMD npm start
#  # pull official base image
# FROM node:latest

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# # ENV PATH /app/node_modules/.bin:$PATH

# # add app
# COPY . .

# # install app dependencies
# # COPY package.json .
# # COPY package-lock.json ./
# RUN npm install
# # RUN npm install react-scripts@3.4.1 -g


# # start app
# CMD ["npm", "start"]

# EXPOSE 3000
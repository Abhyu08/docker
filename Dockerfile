# -----------------------------------------
# THIS FILE WILL AUTOMATE THE PROCESS ON AWS 
# -----------------------------------------

# which runtime
FROM node:7
# create working dir
WORKDIR /app
# copy pkg.json file into created file.
COPY package.json /app
# now need to install all node modules (dependencies from pkg.json)
RUN npm install
# make "app" as current directory [src (.) --> destination (/app)]
COPY . /app
# run node server
CMD node server.js 
# to run on which server
EXPOSE 9000
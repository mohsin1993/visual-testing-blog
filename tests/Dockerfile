FROM cypress/browsers:node14.16.0-chrome89-ff86

WORKDIR /cypress-tests

COPY package-lock.json package.json ./

RUN npm ci

RUN npx cypress verify

COPY . .

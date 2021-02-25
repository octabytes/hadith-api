# hadith-api

NodeJS Hadith APIs

# Run Local

First of all you should have to install the Firebase CLI

`npm install -g firebase-tools`

Clone repository

`git clone https://github.com/octabytes/hadith-api.git`

Install require packages

`npm install`

Move into firebase dir

`cd hadith-api/firebase`

Run local Firestore

`firebase emulators:start --only firestore --import=./cache`

Your emulators start running on [http://localhost:4000/firestore](http://localhost:4000/firestore)

Run API

`export FIRESTORE_EMULATOR_HOST="localhost:8080"`

`npm start` or watch `npm run watch`

Open in browser

[http://localhost:5000/v1/welcome](http://localhost:5000/v1/welcome)

# Documentation

### Get Hadith by id

`http://localhost:5000/v1/:collection/:id`

### Get Hadith books

`http://localhost:5000/v1/books/:collection`

### Get all Book Hadiths

`http://localhost:5000/v1/:collection/book/:book_number`

#### Paginate result

`http://localhost:5000/v1/:collection/book/:book_number?offset=:number`

#### Limit the result

`http://localhost:5000/v1/:collection/book/:book_number?limit=:number`

# Palindrome_App

## Summary:
A simple rest API service where users can get, post and delete messages. The messages received will be checked for palindrome and stored in the local database.

## Routes:
* url: http:<base_url>:3000/
  - method: Get --> action: Lists all messages (UI)

* url: http:<base_url>:3000/api/list
  - method: Get --> action: Lists all messages
  - method: Post --> action: Adds an entry [HTTP Body: name(String), message(String)]

* url: http:<base_url>:3000/api/:message_id
  - method: Delete --> action: Deletes an entry

## Installation:
1. Install [docker-ce] (https://github.com/docker/docker-ce) & [docker-compose] (https://github.com/docker/compose)
2. run `docker-compose up`

## Installation (in AWS)
1. Update AWS Access Keys & region in config.json
2. Update instanceParams in `awscreateinstance.js`
2. run `node awscreateinstance.js`

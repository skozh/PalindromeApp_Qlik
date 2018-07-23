# Palindrome_App

## Summary:
A simple rest API service where users can submit messages, get messages and delete messages. The messages sent will be checked for palindrome and stored in the local database. Currently running on AWS: http://ec2-52-15-160-169.us-east-2.compute.amazonaws.com:3000/

## Routes:
* url: http:<base_url>:3000/
  - method: Get --> action: Lists all messages (UI)

* url: http:<base_url>:3000/api/list
  - method: Get --> action: Lists all messages
  - method: Post --> action: Adds an entry [HTTP Body: name(String), message(String)]

* url: http:<base_url>:3000/api/:message_id
  - method: Delete --> action: Deletes an entry

## Installation:
Install [docker-ce] (https://github.com/docker/docker-ce) & [docker-compose] (https://github.com/docker/compose)
run `docker-compose up`

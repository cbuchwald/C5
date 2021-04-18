# C5 (Cognigy Coding Challenge completed by Christian)

## Introduction

Cognigy gave me the chance to work on their great coding challenge so I created this repo to share my code.

## Disclaimer

As I have no permission to publish Cognigy's challenge this documentation will solely focus on what I have created and how it can be installed, configured, started, used and tested.

## What this repo is for

Please take my code as an inspiration how to work with the Cognigy Websocket Client and use it to create your own Webchat clients.

## What this repo is NOT for

If you are tasked to complete the challenge please don't take my code because

1. They will find out it's not yours
2. It made a lot of fun working on it
3. You will learn a lot trying it yourself
4. I'm not the best developer around, there are surely many ways how to improve my code

## Installation

1. Install Git

    If not already installed please install Git. You can find a instructions for your Operating System [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    
2. Install Node and NPM

    If not already installed please install Node and NPM from [here](https://nodejs.org/en/download/)

3. Clone this repo

```
  git clone https://github.com/schinkenpapst/C5.git
```

4. Enter the folder and install it's dependencies
```
  cd C5
  npm install
```

## Configuration

1. Create a configuration file with your endpoint credentials

    Create a file `config.ts` in the folder `src` with this content:
    ```
    export const endpointURL = 'https://YOUR_ENDPOINT_URL'
    export const urlToken = 'YOUR_ENDPOINT_RUL_TOKEN'
    ```

    Please update the placeholders with the proper credentials to access the Socket Client. If you need credentials please contact Cognigy [here](https://support.cognigy.com/hc/en-us/requests/new)
    
## Run

1. Run the web server
    ```
    npm run start
    ```
    
2. Open your browser and navigate to `http://localhost:8080` or `http://127.0.0.1:8080`

    You should now see something like this:
    
    ![EmptyTool](https://i.ibb.co/dB6JZkz/C5empty.png)

## Use

1. Enter some text into the input box and press enter or hit the Send button. The interface will contact the Cognigy Socket Client and reply like this:

    ![Reply](https://i.ibb.co/9qFPSZL/C5text.png)
    
2. Send `cat image` to the Endpoint and see what happens :D

## Build

1. Dev Build:

    run `npm run buildDev`

2. Prod Build:

    run `npm run buildProd`

## Test

1. Get sure the web server is running. If not run `npm run start`

2. run `npm run test` to run all tests with Cypress

## Change Log

1.0.0 Upload first version.

Implementation Status: 

| ID | Feature                      | Status  |
|----|------------------------------|---------|
|001 |WebInterface                  |Completed|
|002 |Redux State                   |Completed|
|003 |Socket Client Helper Functions|Completed|
|004 |Type Annotations              |Completed|
|005 |Cat Image implementation      |Completed|
|006 |Scroll to bottom functionality|Completed|
|007 |Material UI Theme             |Completed|
|008 |Custom Bundler Configuration  |Completed|
|009 |Automated Tests               |Started  |
    
## Ideas how to improve

1. Support for other message data inputs such as buttons and bubbles
2. I18N support for different interface languages and locales
3. Keyword specific triggers to call other web APIs
4. Implement an authentication and send a userID with each request
5. Improve styling
6. Add more tests

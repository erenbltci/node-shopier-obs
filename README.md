# Shopier Webhook Integration with Node.js

This project is coded as an example and aid for integrating the Shopier OBS system with Node.js. It is designed to receive webhook events from Shopier and process them accordingly.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:technoeren13/node-shopier-obs.git
   cd shopier-webhook
   ```

2. Install the dependencies:

   ```sh
   npm install
   yarn install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project and add your configuration variables:

   ```env
   PORT=1302
   SHOPIER_OSB_PASSWORD=
   SHOPIER_OSB_USERNAME=
   ```

## Usage

1. Start the server:

   ```sh
   npm start
   yarn start
   ```

2. The server will start on the port defined in the `.env` file (default is 3000).

3. Go to shopier to "Sipariş Bildirimi" page and enter your server URL

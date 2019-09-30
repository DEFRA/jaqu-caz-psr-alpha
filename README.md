# JAQU-CAZ-PSR-Alpha

GOV.UK-styled front-end prototype for the Joint Air Quality Unit Clean Air Zones Payments, Settlement and Reconciliation online service.

## How to run the prototype

* Ensure you have access to an Informed Solutions Vagrant box with Node.js and Visual Studio code installed. This can be retrieved from the Informed-CD-Scripts repository.
* Once logged into the Vagrant box, clone the JAQU-CAZ-PSR-Alpha repository.
* Inside a terminal, navigate into the cloned repository and run `npm install`.
* Add the Pay a Clean Air Zone charge GOV.UK Notify team and whitelist API key to the (hidden) .env file in your repository. To do this, open the .env file in a text editor and under `INSERT YOUR DATA HERE`, add `NOTIFYAPIKEY=` plus the API key, which can be found at https://confluence.informed.com/display/JAQU/Secrets.
* To run the prototype locally, run `npm start`. The prototype can be accessed in a browser on http://localhost:3000/payment

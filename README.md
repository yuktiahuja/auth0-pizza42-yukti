#Pizza 42
This app is hosted at https://yuktipizza.z13.web.core.windows.net/ This project was generated with Angular CLI version 9.0.7.

#npm install
In the project directory, you can run: npm install to create the node_modules

#ng s --o
This command will run the app in the development mode. Open http://localhost:4200 to view it in the browser. Please note that the page will reload if you make edits to the src directory.

#Authentication
You can log or sign up in with email/password or Google/Gmail authentication via Auth0. The app will work the same way. 

#Verification
If you log in with email/password, you will receive an email to verify your email address. Once the profile has been verified, a verification check has been added to the profile page, and you can order from order pizza page on the app. If you are not a verified user then you wont be able to order anything from the app, however you will be able to browse through the menu and perform other functions in the app.

#API Calls
The API tests are under the Google API tab. If you are authenticated with Google, the Google Connections button queries the Google People API. If this is the first time you are making the call, it will store the results in your Auth0 metadata. If you have already stored it in your metadata, it returns the number of connections that you have.

#Auth0 Tenant
Tenant: dev-7b8yj73c

# DevTinder-web

- Create a Vite + React project application
- npm install
- initialize a git repository -> git init

- Remove unnecessary code and create a Hello World app
- Install Tailwind css
- install daisyUI => npm i -D daisyui@latest
- Add NavBar component to src/app.jsx
- Create a NavBar.jsx separate Component file
- Install react-router (V7+)

- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet Component in your Body Component
- Create a Footer Component

- Create a Login Page
- Install axios
- CORS - install cors on backend => add middleware to with configurations: {origin:"FrontEndDomain" , credentials: ture}
- Whenever making API call so pass ( axios call, {withCredentails:true} )
  Body

- Instal react-redux + @reduxjs/tookilt - https://redux-toolkit.js.org/tutorials/quick-start

- Create a configureStore => Provider => createSlice => add reducer to store

- Add Redux tool in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder

- You should not be access other routes without login
- If token is not preset, redirects to login page
- Logout feature
- Get the feed and add the feed in the store
- build the user card on feed
- Edit profile feture
- Show Toast message on profile
- New Page - See all my connections at one place
- New Page - See all my connection requests
- Feature - Accept /Reject connection Request
- Send/ignore the user card from feed
  <<<<<<< HEAD

# Adding a custom Domain Name

-purchase domain name fro godaddy

- signup on cloudflare & add a new domain name
- change the nameservers on godaddy and point it to cloudflare
- wait for sometime till your nameservers are updated -15 mins
- DNS record: A devtinder.in 13.62.55.3
- Enable SSL for website

# Sending Emails via SES

- Create a IAM user
- Give Access to AmazonSESFullAccess
- Amazon SES: Create an identity
- Verify your domain name
- Verify an email address identity
- Install AWS SDK -v3 -Code Example: https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples

- Setup SesClient
- Access Credentials should be created in AWS IAM under security credentials
  Tab
- Add the credentials to the env file
- Write code for SESClient
- Write code for sending email address
- Make the email dynamic by passing more params to the run function

# Schedulin cron jobs in NodeJs

- installing node-cron
- Learning about cron expression syntax -crontab.guru
- Schedule a job
- date-fns
- Find all the unique emailIds who have got connection request in previos day
- Send Email
- Explore queue mechanism to send bulk emails
- Amazon SES Bulk email
- Make sendEmail function dynamic
- bee-queue & bull npm packages

# Razorpay Payment Gateway Integration

- Signup on the razorpay
- Created a UPI for premium page
- Creating an API for create order in backend
- Added my key and secret in .env file
- Initialize razorpay in Utils
- Creating order on razorpay
- created a paymentSchema & model
- Saved the orders in the payment collection
- make the API dynamic
- Setup Razorpay webhook on your live API
- Ref - https://github.com/razorpay/razorpay-node/blob/master/document
- Ref - https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/
  -Ref - https://razorpay.com/docs/webhooks/validate-test/

- Ref - https://razorpay.com/dpcs/webhooks/payloads/payments

=======

- Signup New User
- > > > > > > > d3802a464467817a42d6ecd6bf52b41c322473b5
  > > > > > > > Remaining:

- E2ETesting

- NavBar
- Route=/ =>Feed
- Route=/login => Login
- Route=/connections =>Connections
- Route=/profile => Profile

# [Sezzle Take Home Exercise ](https://sezzle-take-home.herokuapp.com/) 🔗 :

### Calculator Exercise details

Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4 = 12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. The calculator only needs to implement basic arithmetic operations, although you can add other math functions if you would like to impress. But don't forget to meet the basic requirements of the exercise first!

The app must be hosted and deployed to be publicly accessible to engineers at Sezzle so that we can grade the project. The deliverables include both the deployed application and the source code hosted at a site like Github.

## Getting Started :

[The application is deployed on Heroku here](https://sezzle-take-home.herokuapp.com/)

You can open up the deployed link and explore the website. Enter a basic math operation and the results of the operation gets displayed on the right aside.

### Prerequisites :

You will need both `node` and `yarn` installed on your computer in order to run this app. You can find out more about `yarn` at their [official site.](https://yarnpkg.com/lang/en/docs/install/)

### Installation :

Inside your terminal or command prompt, navigate to the root directory of this project. Install the necessary dependencies by running either -

```
npm i
```

or

```
yarn install
```

After the installation process is done, you can run one of the commands below, depending on which package manager you decided to use to install all the dependencies

```
yarn start
```

or

```
npm start
```

To initialize the app. It will launch the application at `http://localhost:5000` (\*\* If you did not set an environmental variable name PORT) and you are now ready to perform calculations

## Built With :

-   HTML5 & CSS3
-   [Javascript](https://www.javascript.com/) - programming language
-   [Express](https://expressjs.com/) - NodeJs Framework for serving the html file and setting up a websocket
-   [Socket.io]() - Enables real-time, bidirectional and event-based communication between clients and server.

# gympoint-mobile
A complete Gym management application that enables registered members to check in the gym and submit help orders through a react-native mobile App. Gym administrators have a reactjs web application for managing members, enrollments, plans, and help orders.

This client is implemented in  **React-Native**, consumes the backend API available at [gympoint-backend](https://github.com/jonathasgabriel/gympoint-backend) and is used by gym members only. The reactjs web application is used by administrators only and is available at [gympoint-frontend](https://github.com/jonathasgabriel/gympoint-frontend).

## features
- Login with provided id
- Check in to the gym (up to 5 times in a 7 days window) and view previous check ins
- Create help orders and view answers

## some of the leveraged techs/libs/tools
- Axios
- ESLint, Prettier, EditorConfig
- Styled components
- Reactotron
- React redux
- Redux saga
- Async storage
- React native gesture handler
- React native navigation stack

##  demo
![](gympoint-mobile-demo.gif)

## how to run

- You need to have the backend API running in order to be able to use this client. Please refer to [gympoint-backend](https://github.com/jonathasgabriel/gympoint-backend) for further instructions
- In the root directory, run `yarn` to resolve node packages and then `yarn react-native run-ios` or `yarn react-native run-android `to start the application in your mobile device emulator/via usb

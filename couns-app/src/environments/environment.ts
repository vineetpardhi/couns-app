// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



export const environment = {
  production: false,
  firebaseConfig :{
    apiKey: "AIzaSyBxPSgTdmdDTtO2H3GsboYdVG0Fv5p6yXo",
    authDomain: "couns-app.firebaseapp.com",
    databaseURL: "https://couns-app.firebaseio.com",
    projectId: "couns-app",
    storageBucket: "couns-app.appspot.com",
    messagingSenderId: "954723585281",
    appId: "1:954723585281:web:9e79cd42a2a8c4ad279f00",
    measurementId: "G-EGF71YSG31"
  },
  dialogflow:{
   angularBot:'492d59a2ecef438ca21e46496d9da3fc '

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

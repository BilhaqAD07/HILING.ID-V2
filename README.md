# HILING.ID V.2 (MAKE YOUR FLIGHT EASIER!)

---
Download APP <a href="https://expo.dev/artifacts/eas/fb2yJcPZWuFvRb5FeYomLo.apk">HERE</a>.
### Desc
This app using redux-thunk on Profile Page with API to show IP and etc.

#### Screenshot Landing Page
<p align="center">
    <img width="200px" src="/assets/SS_Tampilan1.jpg">
</p>

#### Screenshot Searching Result
<p align="center">
    <img width="200px" src="/assets/SS_Tampilan2.jpg">
</p>

#### Screenshot Profile
<p align="center">
    <img width="200px" src="/assets/SS_Tampilan4.jpg">
</p>

#### Screenshot Hasil Pencarian Aplikasi
<p align="center">
    <img width="200px" src="/assets/SS_test.png">
</p>

## Repo Structure
```
/
├─ assets/                  # All assets and screen
├─ src/
├─ └─ db/
│      └─ Data.js           # Saved Flight Data 
│      └─ logo.js           # Logo for picture load
├─ └─ redux-thunk/
│      └─ Actions.js        # Action File Fetch Redux Thunk
│      └─ Actions.test.js   # Jest Testing Unit Action Fetch Redux Thunk
│      └─ Reducer.js        # Reducer for state based on Action
│      └─ store.js          # Middleware File Redux Thunk
│  └─ Detail.js             # Searching Results
│  └─ Home.js               # Home Page (Landing Page)
│  └─ Profile.js            # Profile Page
│
├─ App.js                   # Rendering App
├─ .gitattributes
├─ .gitignore
├─ README.md
├─ app.json
├─ babel.config.json
├─ eas.json
├─ jest.config.json
├─ package-lock.json
├─ package.json
```

## Requirements
- [React native](https://reactnative.dev/)
- [React native vector icon by MaterialComunityIcons](https://materialdesignicons.com/)
- [Expo](https://expo.dev/)
- Redux Thunk
- Jest
- Redux Mock Store


## Installation
Run the following command below in project terminal root to build android apk
```
yarn install
```
or
```
npm install
```
&nbsp;
Next is run the same function as git init inside expo
```
npx expo install expo-updates
```
&nbsp;
Build inside expo
```
expo build:android
```
or
```
npm install -g eas-cli
eas build -p android
```
&nbsp;
Then wait and follow the instruction if it the first build, generate a new key and choose apk.Last if expo need login in terminal input same as your expo.dev account
&nbsp;




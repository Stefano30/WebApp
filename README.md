# Allos Chatbot - Webview

Allos Chatbot - web page (mobile ready!)

### Installation

First, install ionic globally, then install the npm package:

```sh
$ npm install -g @ionic/cli
$ npm install
```

### Development server

To start the server, go to `/environments/environment.ts` and change the `SERVER_URL` variable accordingly.
Then launch:

```sh
$ ionic serve
```

### Build

To build the app, use this command:
```
$ ionic build --prod
```
This will produce a `/www` folder along with a `/build.zip` file. You can use this zip to deploy the app directly to the SCP Neo environment.

## Authors

* **Nicolas Casartelli**
* **Stefano Cavaliere**
* **Marco Tritoni**

## License

This project is licensed under the MIT License.
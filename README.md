# Pandoe-Web Service

### Table of content
- [Environment](#environment)
- [Configuration](#configuration)
- [API Documentation](#api_documentation)
- [API URL](#Environment)
- [Running The Server](#Environment)
### Environment
Pandoe Web Service runs with :
1. ExpressJS
2. Docker
3. Artifact Registry
4. Cloud Run
5. Cloud Storage
6. Cloud SQL MySQL


### Configuration
You need these to run the server 
- .env
  ```javascript
   DATABASE_URL = "mysql://root:("passwordofyourcloudsqlinstances"):3306/("yourdatabasename")?socket=/cloudsql/("instancesconnectionname")"
   PORT = ""
   JWT_SECRET = ""
   MODEL_URL = ""
   GOOGLE_APPLICATION_CREDENTIALS = ""
   ```
- service-account.json
  (you can get the key from IAM > service account > create service account > set the role to storage object admin > manage key > create json key) 
  ```
  {
  "type": "",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": "",
  "universe_domain": ""
  }
  ```

  
### API Documentation
[POSTMAN Documentation](https://crimson-trinity-212190.postman.co/workspace/New-Team-Workspace~0c428529-5ae2-4334-ba7e-aa901dc44b1f/collection/20640011-cf770790-45de-42bf-8d3b-97da2cce3ced?action=share&creator=34742807)

### API URL
```https://pandoe-webservice-nlawccmnia-et.a.run.app```

### Running The Server
1. run the model program which already in [model](https://github.com/C241-PS488/pandoe-ml)
2. save the model to tensorflow model
3. store the model to cloud storage
4. download the web service which is already in [web service](https://github.com/C241-PS488/pandoe-web-service)
5. build the code to docker image using this ```docker build -t gcr.io/project-id-gcp/image-name:version .```
6. push the image to artifact registry ```docker push gcr.io/project-id-gcp/image-name:version```
7. setup cloud sql instances in google cloud platform and choose mysql for database
8. create the name of database
9. open cloud run service, choose previously pushed image from artifact registry
10. set the env variables
11. deploy
12. integrate the api to mobile app
13. run the app.

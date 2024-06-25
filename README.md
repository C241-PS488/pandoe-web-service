# Pandoe-Web Service
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

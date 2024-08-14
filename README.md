Implement the CICD with github Action and AWS
 - Setup the NodeJS project in local
 - Setup the AWS ubuntu instance (alone Node, Npm, Nginx, PM2)
 - Push the code to github
 - Create the github action for this project and update the Node JS.yml file as mentioned in the source code (this file help for build)
 - Create the Self hosted runner and excute the command in AWS console which mentioned in the github runner
      - Skip the last command
      - finally run this command sudo ./svc.sh install and sudo ./svc.sh start (this will start the CICD in AWS using github action)
 - check self hosted runner is active in githib
 - use the PM2 to run nodeJS application in background and also use PM2 to restart the application whenever push new code to github

How github Action working
  - Whenever push the new code to github , github action will get trigger
  - also it will trigger the runner and it will excute the build with help of nodejs.yml file in AWS (github and AWS will always sync)
  - we have command to restart the node application in nodejs.yml, that will restart the aplication with latest code.

Nginx Setup
  - After install Nginx and go to this path "/ect/nginx/sites-avaiable"
  - run sudo nano default and edit the default file with below lines
       server {
    location /node_app/ {
        proxy_pass  http://localhost:3000/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
- if you want run FE code using nginx , update root path in default file
- finally restart the nginx (sudo systemctl restart nginx)

Help link
- https://www.youtube.com/watch?v=JS07npwL3Ps&t=351s
- https://stackoverflow.com/questions/20220846/forwarding-port-to-node-js-app-with-nginx-and-routing

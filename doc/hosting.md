# Hosting

`api.natphoto.me` is run on an Amazon EC2 instance.
`natphoto.me` is hosted on an Amazon S3 server.

The following is information about how the server is set up, and run.

## Creating the EC2 Instance

The first step in setting up the server is to create a new EC2 instance. The  
default Linux AMI works perfectly for what we need. There are two tools that  
will be required once the default machine is started:

1. **Git** - Git will allow the most recent version of the app to be pulled  
   from GitHub. Install using `sudo yum install git`.

2. **Docker** - Docker will allow the server container to be run on our new  
   instance. Install using `sudo yum install docker`.

## Connecting to the Instance

Connect to the instance using `ssh`. In order to connect, you will need the  
.pem file containing the private key for the ec2-user account. A sample command  
for connecting is as follows:

`$ ssh -i ./path/to/auth.pem ec2-user@natphoto.me`

In order to connect with the website url it is first necessary to set up the  
nameserver records with Namecheap. Instructions for this can be found below.

## Running the Server

Before running the server, ensure that port 80 is opened for inbound  
connections.  The server is run the same way that it is on the local machine.  
First, pull the current app repository from GitHub. If this is a new instance,  
use

`$ git clone https://github.com/flpymonkey/idb`

To update the code on the instance, use

`$ git pull origin master` or simply `$ git pull`

Once the code is up to date, run the server using

`$ make serve`

The server can be stopped at any time with

`$ make halt`

For more information about the make commands, please refer to the "Makefile  
Commands" section of [Tools](/doc/tools.md).

## Setting up the Domain Name

Once the server is able to run, we want users to be able to access the site at  
the domain name rather than the IP address for the EC2 instance. To set up the  
domain name, first set up an Elastic IP address for the instance.  Create a new  
Elastic IP address and then associate it with the EC2 instance.

Then, use Route 53 to create a new "Hosted Zone" for your domain name. A set of  
nameservers will automatically be generated for your domain name. Enter all  
four of the generated nameservers on NameCheap, and add two additional A  
records in Route 53. The first record you add should be your domain name by  
itself, and the second should include "www" in front of your domain name. Both  
A records should have a value of your Elastic IP address from before.

After some time, your domain will now point to your EC2 server and the running  
page can be accessed at yourdomain.com and www.yourdomain.com.

## Updating the front-end website on S3

We update the front-end of our website by building the React app as described in
[tools](tools.md), and then uploading the contents of the build to an Amazon S3
instance. All of the data is then populated on the site by hitting our back-end
API endpoints on `api.natphoto.me`.

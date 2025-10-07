# Data modeling

# Guidelines to install and run the environment on localhost

#### First of all, make sure you have MySQL Server and MySQL Workbench installed (Workbench to see the data).

###

### 1. Open the terminal inside the project folder in your IDE

### 2. Now you'll need to run a few commands (in this order):

#### `npm install` - to install all the node_modules and necessary dependencies

#### `npx prisma generate` -

#### Now, you need to create a schema/use an existing one in MySQL

#### Create a .env file in the root project folder

#### In the .env file, you need to follow this connection format:

#### `DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE`

#### Final .env variable example: 

#### ``



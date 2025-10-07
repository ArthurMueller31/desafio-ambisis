> EN-US

# Data modeling / Modelagem dos dados

<img width="936" height="617" alt="image" src="https://github.com/user-attachments/assets/94752158-a21d-4b4b-9c26-62c4ca86a12a" />

---

# Guidelines to install and run the environment on localhost

#### First of all, make sure you have MySQL Server and MySQL Workbench installed.

### 1. Open the terminal inside the project folder on your IDE.

### 2. Run the command

### `npm install` - to install all the node_modules and necessary dependencies.

---

### 3. Now, create a database in MySQL (if you don't have one yet).

<img width="610" height="94" alt="image" src="https://github.com/user-attachments/assets/856ba260-69bc-4f9b-8051-8726b894ef6b" />

### 4. Create a .env file in the root project folder.

<img width="119" height="29" alt="image" src="https://github.com/user-attachments/assets/6953040a-b5d3-43f2-9e2b-addc27295c93" />

### 5. In the .env file, you need to follow this connection format:

### `DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"`

### .env variable example: 

### `DATABASE_URL="mysql://root:password123@127.0.0.1:3000/example"`

#### How to find the connection data provided by MySQL:

#### 1. On MySQL Workbench, go to "Database" -> "Connect to database".

<img width="343" height="244" alt="image" src="https://github.com/user-attachments/assets/06d7a523-ceab-4976-8264-0efd7a4d751c" />

#### 2. You should see a screen like this:

<img width="669" height="270" alt="image" src="https://github.com/user-attachments/assets/7f0b0726-e878-476c-b07c-73eac9ca993b" />

#### 3. Follow this format -> `DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"`
#### USER: MySQL's `Username`; 
#### PASSWORD: The password you defined when connecting to an existing schema; 
#### HOST: MySQL's `Hostname`;
#### PORT: MySQL's `Port`;
#### DATABASE: The database name you've created. In this case, it was `example`.

---

### When you are done adding the .env file and its variable, run the command:

### `npx prisma migrate dev` - syncs the prisma schema with MySQL.

#### You should see something like this:

<img width="801" height="104" alt="image" src="https://github.com/user-attachments/assets/efb5bc0c-4663-454b-a9c0-8bc35a34b78c" />

#### * If you don't see a "src/app/generated" folder, run `npx prisma generate`, to manually generate the folder.

---

> PT-BR

# Orientações de instalação e execução do ambiente em localhost

#### Antes de tudo, verifique se você tem o MySQL Server e o MySQL Workbench instalados.

### 1. Abra o terminal dentro da pasta do projeto no seu IDE.

### 2. Execute o comando

### `npm install` - para instalar todos os node_modules e dependências necessárias.

---

### 3. Agora, crie o banco de dados no MySQL (ee você não tiver um ainda).

<img width="610" height="94" alt="image" src="https://github.com/user-attachments/assets/856ba260-69bc-4f9b-8051-8726b894ef6b" />

### 4. Crie um arquivo .env na raiz da pasta do projeto.

<img width="119" height="29" alt="image" src="https://github.com/user-attachments/assets/6953040a-b5d3-43f2-9e2b-addc27295c93" />

### 5. No arquivo .env, você precisará seguir esse formato de conexão:

### `DATABASE_URL="mysql://USUARIO:SENHA@HOST:PORTA/BANCODEDADOS"`

### Exemplo de variável no arquivo .env: 

### `DATABASE_URL="mysql://root:senha123@127.0.0.1:3000/example"`

#### Como encontrar os dados de conexão fornecidos pelo MySQL:

#### 1. No MySQL Workbench, vá para "Database" -> "Connect to database".

<img width="343" height="244" alt="image" src="https://github.com/user-attachments/assets/06d7a523-ceab-4976-8264-0efd7a4d751c" />

#### 2. Você deve ver uma tela como esta:

<img width="669" height="270" alt="image" src="https://github.com/user-attachments/assets/7f0b0726-e878-476c-b07c-73eac9ca993b" />

#### 3. Siga esse formato -> `DATABASE_URL="mysql://USUARIO:SENHA@HOST:PORTA/BANCODEDADOS"`
#### USUARIO: `Username` descrito na tela do MySQL; 
#### SENHA: A senha que você definiu na hora que conecta em um schema.
#### HOST: `Hostname` descrito na tela do MySQL;
#### PORTA: `Port` descrito na tela do MySQL;
#### BANCODEDADOS: O nome do banco de dados que foi criado. Neste caso, foi `example`.

---

### Quando terminar de adicionar o arquivo .env e sua variável, execute o comando:

### `npx prisma migrate dev` - sincroniza o schema do prisma ao MySQL.

#### Você deve ver algo como isto:

<img width="801" height="104" alt="image" src="https://github.com/user-attachments/assets/efb5bc0c-4663-454b-a9c0-8bc35a34b78c" />

#### * Caso não ver a pasta "src/app/generated", execute `npx prisma generate` para gerar manualmente.


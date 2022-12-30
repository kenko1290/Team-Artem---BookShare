### 📕📗📘📙 Book Share 

Book Share is a full stack application built by 
[WenBin Lin](https://github.com/wenbin1354) : wblin2986@gmail.com 
[Oumar S.](https://github.com/oumar-s) : omarcb1020@gmail.com 
[Shahjalal Sikder](https://github.com/Shah55) : shah.sikder55@gmail.com 
[Ken Ko](https://github.com/kenko1290) : ken.ko1290@gmail.com

It is currently deployed [here]()


### ✨ Description 
`Book Share` is a full stack CRUD application that allows users to share books with each other. Users can create an account, search for books, and request to borrow books from other users. Users can also accept or decline requests to borrow their books.

Our motivation was to give students a platform where they can share textbooks with their fellow students by lending it or by donating due to high cost of textbooks that might places a huge financial burden on students.

### ⚙ Technologies Used
- `React` as the front-end framework
- `Bootstrap` for styling
- `Node.js` and `Express.js` as the back-end framework
- `PostgreSQL` as the database
- `Sequelize.js` as the ORM
- `Passport.js` for authentication
- `Bcrypt.js` for password hashing

### 💨 To Get Started Locally

#### Ensure you have PostgreSQL installed
#### Create a PostgreSQL user and database

`Book Share` expects the following for local development:

- PostgreSQL User/Role
  - name: `ctp_user`
  - password: `ctp_pass`
- PostgreSQL Database
  - name: `ctp_appdb_development`

#### 🏃‍♀️ Running the app locally

For local development you will need two terminals open, one for the api-backend and another for the react-client.

_Clone_ this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

### 🎨 Tasks to Work On and Bugs
#### Tasks
- [ ] Improve UI/UX of the pages
- [ ] Make filter work
- [ ] Add decline request functionality
- [ ] Add return book functionality
- [ ] Add update textbook functionality
- [ ] Add delete textbook functionality
- [ ] Add delete account functionality
- [ ] Add private message between Users
- [ ] Add 2FA and email verification
- [ ] Add notification settings
- [ ] Add edit settings functionality
- [ ] Add privacy settings
- [ ] Add image support
#### Bugs
- [ ] User can make multiple requests to a single textbook
- [ ] User can make requests to their own textbook
- [ ] Saving changes to profile doesn't reflect immediately, requires User to refresh the page
- [ ] Laggy forms

### 🤝 Contributing
If you want to contribute to this project, we are very happy to welcome.
1. Clone your fork
2. Create your feature branch: `git checkout -b my-new-feature`
3. Stage changes `git add .`
4. Commit your changes: `git commit`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

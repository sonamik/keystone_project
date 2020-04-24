const { Keystone } = require('@keystonejs/keystone');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const TodoSchema = require('./lists/Todo.js');
const UserSchema = require('./lists/User.js');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');

// https://www.keystonejs.com/tutorials/new-project
const keystone = new Keystone({
  name: 'Base Project',
  adapter: new MongooseAdapter(),
});

keystone.createList('Todo', TodoSchema);
keystone.createList('User', UserSchema);

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp()],
}

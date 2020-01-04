import express from 'express'
import graphqlHTTP from 'express-graphql'
import compression from 'compression'
import api from './controllers/Api'
import { buildSchema } from 'graphql'

const app = express();
const port = Number(process.env.API_PORT) || 8080;

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use(compression())
app.disable('x-powered-by');
app.use('/api/v1', api)
app.use('/graphql/v1',
  graphqlHTTP({
    schema: buildSchema(`
      type Query {
        hello: String
      }
    `),
    rootValue: root,
    graphiql: true,
  })
)

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

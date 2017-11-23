import path from 'path';
import express from 'express';
import morgan from 'morgan';
import renderList from './pages/list';

import renderListItem from './components/list-item/render';
import renderListContainer from './components/list-container/render';

const app = express();
app.use(morgan('dev'));
app.use('/', express.static('./build'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/list-item', (req, res) => {
  res.send(renderListItem({
    title: req.query.title,
    checked: req.query.checked
  }));
});

app.use('/list-container', (req, res) => {
  res.send(renderListContainer({
    title: req.query.title,
    items: JSON.parse(req.query.items)
  }));
});

app.get('/lists/:listId?', (req, res) => {
  const html = renderList(req.params.listId);
  res.render('layout', { html });
});

app.listen(3001);
console.log(`Components are available here:
>> http://127.0.0.1:3001/list-item
`);

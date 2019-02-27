const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':'1',
            'image':'https://placeimg.com/64/64/1',
            'name': '김동현',
            'birthday':'910605',
            'gender':'남자',
            'job':'프로그래머'
          },
          {
            'id':'2',
            'image':'https://placeimg.com/64/64/2',
            'name': '강상원',
            'birthday':'910605',
            'gender':'남자',
            'job':'배송기사'
          },
          {
            'id':'3',
            'image':'https://placeimg.com/64/64/3',
            'name': '소나타',
            'birthday':'020101',
            'gender':'남자',
            'job':'폐기물'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
// Singleton.
const repeat = function(n, arr) {
  output = arr;
  for (let i = 0; i < n; i++) {
    output = [...arr, ...output];
  }
  return output;
};

export default DataFetcher = {
  data: {
    email: '',
    modifiers: {},
    keywords: [],
  },

  isOpen: false,

  getKeywords: function() {
    return this.data.keywords.map(elem => elem.string);
  },

  getIdForKeyWord: function(key) {
    let idx = this.data.keywords.map(e => e.string).indexOf(key);
    return this.data.keywords[idx].id;
  },

  getModifiersForKeyword: function(key) {
    return this.data.modifiers[key];
  },

  orderUp: function(keywords, cb) {
    fetch('http://surgefoodz.herokuapp.com/new_order/', {
      method: 'PUT',
      body: JSON.stringify({keywords})
    })
    .then((response) => console.log(response))
    .catch(error => {console.log(error); alert(error)})
  },

  fetchedKeywords: false,
  fetchKeywords: function(cb=()=>{}) {
    if (this.data.fetchedKeywords) {
      return cb();
    }

    fetch('http://surgefoodz.herokuapp.com/keywords_main')
      .then((response) => response.text())
      .then((responseText) => {
        let data = JSON.parse(responseText);
        this.data.keywords = repeat(4, data);
        this.fetchedKeywords = true;
        cb();
      })
      .catch((error) => {
        alert('Could not fetch data.');
      });
  },

  fetchedModifiers: {},
  fetchModifiers: function(mkeyword, cb=()=>{}) {
    let ids = [this.getIdForKeyWord(mkeyword)];
    fetch('http://surgefoodz.herokuapp.com/child_keywords/?format=json&keywords=' + ids.join(','))
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log('SHHAMEER', data);
        this.data.modifiers[mkeyword] = data.map(elem => elem.string);
        cb();
      })
      .catch((error) => {
        console.log(error);
        alert('Could not fetch data.');
      });
  },

  fetch: function() {

    // // Fill in with http requests later.
    // this.data = {
    //   modifiers: {
    //     'pizza': [
    //       'cheese',
    //       'small',
    //       'medium',
    //       'large',
    //       'x-large',
    //       'gluten free',
    //       'bell peppers',
    //       'olives',
    //       'bbq sauce',
    //     ],
    //   },
    //   keywords: repeat(4, [
    //     'burger',
    //     'pizza',
    //     'steak',
    //     'pasta',
    //     'chinese',
    //     'japenese',
    //     'ramen',
    //     'noodles',
    //     'soup',
    //     'pizza',
    //     'burger',
    //     'chicken',
    //     'salad',
    //     'sandwich',
    //     'pasta',
    //     'fruits',
    //     'candy',
    //     'pho',
    //   ]),
    // };
  }
};

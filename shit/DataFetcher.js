// Singleton.
const repeat = function(n, arr) {
  output = arr;
  for (let i = 0; i < n; i++) {
    output = [...arr, ...output];
  }
  return output;
};

export default DataFetcher = {
  data: {},

  fetch: function() {
    // Fill in with http requests later.
    this.data = {
      modifiers: {
        'pizza': [
          'cheese',
          'small',
          'medium',
          'large',
          'x-large',
          'gluten free',
          'bell peppers',
          'olives',
          'bbq sauce',
        ],
      },
      keywords: repeat(4, [
        'burger',
        'pizza',
        'steak',
        'pasta',
        'chinese',
        'japenese',
        'ramen',
        'noodles',
        'soup',
        'pizza',
        'burger',
        'chicken',
        'salad',
        'sandwich',
        'pasta',
        'fruits',
        'candy',
        'pho',
      ]),
    };
  }
};

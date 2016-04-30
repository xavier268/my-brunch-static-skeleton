module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  // Configure preprocessors with defaults ... :
  // see details in the doc for html-brunch-static
  plugins: {
    static: {
      processors: [
        require('html-brunch-static')({
          processors: [
            require('marked-brunch-static')(),
            require('jade-brunch-static')(),

          ],
          handlebars: {
            enableProcessor: true,
            helpers: {
              hlink: function(hh) {
                return " Hlink says hello to " + hh ;
              }
            }
          }
        })
      ],

    }
  }
};

// Connect to a database about faculty

const mongoose = require('mongoose');

// Export this functiokn
module.exports = function() {

  // Avoid warnings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('userUnifiedTopology', true);
  mongoose.set('useCreateIndex', true);
  mongoose.set('UseFindAndModify', false);

  // Start connecting
  mongoose.connect('mongodb://localhost/faculty');

  // Make sure we see any errors
  mongoose.connection.on('error', function(error){
    consol.error(error.stack);
  })

}

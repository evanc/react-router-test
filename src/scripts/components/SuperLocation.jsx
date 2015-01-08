var invariant = require('react/lib/invariant');

var _listener;
var location = "";

/**
 * A location that is convenient for testing and does not
 * require a DOM. You should manually setup TestLocation.history
 * with the URL paths your test needs before it runs.
 */
var TestLocation = {

  history: ['/'],

  addChangeListener: function (listener) {
    // TestLocation only ever supports a single listener at a time.
    _listener = listener;
  },

  setLocation: function (newLocation) {
    location = newLocation;
    var change = {
        path: newLocation,
        type: "push"
    };
    _listener && _listener(change);

  },

  push: function (path) {
    TestLocation.history.push(path);
    console.log(path, this.getCurrentPath());
  },

  replace: function (path) {
    invariant(
      History.length,
      'You cannot replace the current path with no history'
    );

    TestLocation.history[TestLocation.history.length - 1] = path;
    notifyChange(LocationActions.REPLACE);
  },

  pop: function () {
    TestLocation.history.pop();
    updateHistoryLength();
  },

  getCurrentPath: function () {
    return TestLocation.history[TestLocation.history.length - 1];
  },

  toString: function () {
    return '<SuperLocation>';
  }

};

module.exports = TestLocation;
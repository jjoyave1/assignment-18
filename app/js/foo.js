window.Foo = (function() {

  function Foo() {

    this.plusOne = function (x) {
      return x + 1;
    };

    this.sortArray = function(array) {
      return array.concat().sort();
    };

    this.hasValue = function(array, item) {
      return array.indexOf(item) != -1;
    };
  }

  Foo.greet = function(string) {
    return "Hello, " + string + "!";
  };

  return Foo;

})();

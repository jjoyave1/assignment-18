describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function (){
    it("is a method", function (){
      expect(typeof bar.squared).eq("function");
    });
  });
}

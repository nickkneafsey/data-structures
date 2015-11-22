describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });



  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should work with numbers', function(){
    set.add(7);
    set.add(8);
    expect(set.contains(7)).to.equal(true);
    expect(set.contains(8)).to.equal(true);
  });

  it('should remove numbers', function(){
    set.add(52);
    set.remove(52);
    expect(set.contains(52)).to.equal(false);
  });

  it('should work with objects', function(){
    set.add({test:"hi"});
    set.add({nick:"kneafsey"});
    expect(set.contains({nick:"kneafsey"})).to.equal(true);
    expect(set.contains({test:"hi"})).to.equal(true);
  });

  it('should remove objects', function(){
    set.add({test:"hi"});
    set.remove({test:"hi"});
    expect(set.contains({test:"hi"})).to.equal(false);
  });
});

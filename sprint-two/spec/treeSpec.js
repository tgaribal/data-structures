describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(100);
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should assign the current object as a parent', function() {
    tree.addChild(5);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('should traverse the tree and apply a callback on each node', function() {
    var results = [];
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(6);
    tree.children[1].addChild(9);
    tree.children[1].children[0].addChild(10);
    tree.children[1].children[0].addChild(22);
    tree.addChild(5);
    tree.traverse( function(node) {
      results.push(node);
    });
    expect(results).to.eql([100, 1, 6, 2, 9, 10, 22, 3, 5]);
  });

  it('should remove a child from the tree and reset child and parent properties to reflect this', function() {
    tree.addChild(5);
    tree.addChild(3);
    tree.children[1].removeFromParent();
    expect(tree.children.length).to.equal(1);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

});

describe('num library tests', function () {
  it('should square numbers', function () {
    expect(num.square(-3)).to.equal(9);
    expect(num.square(0)).to.equal(0);
    expect(num.square(3)).to.equal(9);
  });

  it('should square random numbers from an asynchronous source', function (done) {
    var n = 5;
    sinon.stub(num, '_getRandomNumber').callsArgWithAsync(0, n);
    num.squareRandomNumber(function (m, square) {
      expect(m).to.equal(n);
      expect(square).to.equal(n * n);
      num._getRandomNumber.restore();
      done();
    });
  });
});

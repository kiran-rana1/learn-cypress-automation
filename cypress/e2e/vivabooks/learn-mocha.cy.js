describe('Learn how to write test format', () => {
    it('one equals to one', () => {
        expect(1).to.equal(1)
    });

    it('one equals to two', () => {
        expect(2).to.equal(2)
    });

    it('expect one + one to equal 2', () => {
        expect(1 + 1).to.equal(2)
    });

    it('a = b', () => {
        expect('ab').to.equal('ab')
    });

    it('compare two variables', () => {
        const a = 10
        const b = 10
        expect(a).to.equal(b)
    });
});

describe('caclculator.js', () => {
  describe('Calculator',  () => {
    let calculator = new Calculator();
    let calculator2 = new Calculator();

    beforeEach(() => {
      // Anything inside this block executes before
      // each spec (it) inside this describe.
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(() => {
      // Anything inside this block executes after
      // each spec (it) inside this describe.
    });

    it('should initialize total', () => {
      expect(calculator.total).toBe(0);
      expect(calculator.total).toBeFalsy();
    });

    it('can be instantiated', () => {
      jasmine.addMatchers(customMatchers);

      expect(calculator).toBeCalculator();
      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
      expect(calculator.constructor.name).toContain('Calc');
    });

    it('instantiates unique object', () => {
      expect(calculator).not.toBe(calculator2);
    });

    it('has common operations', () => {
      expect(calculator.add).toBeDefined(); // or not.toBeUndefined();
      expect(calculator.subtract).toBeDefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    it('can overwrite total', () => {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    describe('add()', () => {
      it('should add numbers to total', () => {
        calculator.add(5);

        expect(calculator.total).toBe(5);
      });

      it('returns total', () => {
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof(calculator.total)).toMatch('number');
        expect(calculator.total).toBeNumber(); // with a third party matcher!
        expect(calculator.total).toEqual(jasmine.anything());
      });
    });

    describe('subtract()', () => {
      it('should subtract numbers from total', () => {
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
      });
    });

    describe('multiply()', () => {
      it('should multiply total by number', () => {
        calculator.total = 100;
        calculator.multiply(2);

        expect(calculator.total).toBe(200);
      });

      it('does not handle NaN', () => {
        calculator.total = 20;
        calculator.multiply('a');

        expect(calculator.total).toBeNaN();
      });

      it('handles divide by zero', () => {
        expect(() => { calculator.divide(0) }).toThrow();
        expect(() => { calculator.divide(0) }).toThrowError(Error);
        expect(() => { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
      });
    });

    describe('divide()', () => {
      it('should divide total by number', () => {
        calculator.total = 200;
        calculator.divide(2);

        expect(calculator.total).toBe(100);
      });
    });

    describe('get version', () => {
      it('fetches version from external source', (done) => {
        spyOn(window, 'fetch').and.returnValue(Promise.resolve(
          new Response('{ "version": "0.1" }')
        ));

        calculator.version.then(function(version) {
          expect(version).toBe('0.1');
          done();
        });
      });
    });
  });
});

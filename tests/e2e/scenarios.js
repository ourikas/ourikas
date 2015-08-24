'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {



  describe('home', function() {

    beforeEach(function() {
      browser.get('/');
    });


    it('should render search field when user home', function() {
      expect(element(by.css('.search-field')).isPresent()).toBe(true);
    });

  });
});

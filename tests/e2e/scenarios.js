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

    it('should search and retrive search result', function() {
      element(by.css('.search-field')).sendKeys('ourikas');
      expect(element(by.css('.search-result .company')).isPresent()).toBe(true);
    });

    it('should redirect to the company profile when clicking the item link', function() {
      element(by.css('.search-field')).sendKeys('ourikas');
      element(by.css('.search-result .company a')).click();
      expect(browser.getLocationAbsUrl()).toMatch("/ourikas");
    });

  });
});

import { FootballManagerPage } from './app.po';
import { browser, by, element} from 'protractor';

describe('football-manager App', function() {
  let page: FootballManagerPage;

  beforeEach(() => {
    page = new FootballManagerPage();
  });

/*
  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
*/

  it('should display welcome page title, navigate to /welcome', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('FootballManager');
    browser.getCurrentUrl().then( url => {
      expect( url.indexOf('/welcome') > 0).toBe(true);
    }) ;
  });

  it('should route navbar and welcome buttons', () => {
    page.navigateTo();
    element(by.id('playersNavButton')).click();
    browser.getCurrentUrl().then( url => { expect( url.indexOf('/players') > 0).toBe(true); }) ;
    element(by.id('teamsNavButton')).click();
    browser.getCurrentUrl().then( url => { expect( url.indexOf('/teams') > 0).toBe(true); }) ;
    element(by.id('welcomeNavButton')).click();
    browser.getCurrentUrl().then( url => { expect( url.indexOf('/welcome') > 0).toBe(true); }) ;
    element(by.id('playersWelcomeButton')).click();
    browser.getCurrentUrl().then( url => { expect( url.indexOf('/players') > 0).toBe(true); }) ;
    element(by.id('welcomeNavButton')).click();
    browser.getCurrentUrl().then( url => { expect( url.indexOf('/welcome') > 0).toBe(true); }) ;
    element(by.id('teamsWelcomeButton')).click();
    browser.getCurrentUrl().then( url => { expect( url.indexOf('/teams') > 0).toBe(true); }) ;
  });


  it('should add a player', () => {
    page.navigateTo();
    element(by.id('playersNavButton')).click();

    // Hmmm by.model is not (yet) supported
    //element(by.model('newPlayer.firstName')).sendKeys('David'); 
    //element(by.model('newPlayer.lastName')).sendKeys('Backham');
    //element(by.model('newPlayer.birth')).sendKeys('1980');
    //element(by.model('newPlayer.position')).click();

    // Use by.name instead
    // Fill the form by David Backham
    element(by.name('firstName')).sendKeys('David'); 
    element(by.name('lastName')).sendKeys('Backham');
    element(by.name('birth')).sendKeys('1980');
    element(by.name('position')).click();
    element(by.cssContainingText('md-option', 'midfielder')).click(); // midfielder

    // Add the player
    element(by.buttonText('Add')).click();

    // Verify the new "David Backham" card is created and navigate to its details
    element(by.cssContainingText('md-card', 'David Backham'))
      .all(by.cssContainingText('button', 'Details')).get(0).click();

    // Verify we are successfully navigated to the "player" page (not "players")
    browser.getCurrentUrl().then( url => { 
      //console.log("Url of e2e test created player:" + url);
      expect( url.indexOf('/player/') > 0).toBe(true); 
    });
    



  });





});

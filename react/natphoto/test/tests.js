import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import {shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import App from '../src/App.js'
import About from '../src/components/About.js'
import Home from '../src/components/Home.js'
import NavBar from '../src/components/NavBar.js'
import DetailHeader from '../src/components/DetailHeader.js'
import CameraGrid from '../src/components/CameraGrid.js'
import Main from '../src/components/Main.js'
import CameraDetail from '../src/components/CameraDetailPage.js'
import ScrollableTable from '../src/components/ScrollableTable.js'

describe("<App/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<App />);
    });
});

describe("<About/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <About />
            </MemoryRouter>);
    });
});

describe("<Home/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<Home />);
    });
});

describe("<NavBar/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<NavBar />);
    });
});

describe("<DetailHeader/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should pass props correctly", function() {
      var data = {name: "Cannon", megapixels: "5"}
      var test = shallow(<DetailHeader infoAttributes={data}/>);
      expect(test.find('.name').render().text()).to.be.equal("Cannon")
      expect(test.find('.megapixels').render().text()).to.be.equal("5")
    });
});

describe("<Main/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<Main />);
    });
});

describe("<ScrollableTable/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should pass props correctly", function() {
      var photos = [{img: "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg", path: "/parks/Yellowstone National Park", name: "Yellowstone National Park"}]
      var test = shallow(<ScrollableTable tableTitle="Cameras" data={photos}/>);
      expect(test.text().includes('Cameras')).to.be.equal(true)
    });
});

describe("<CameraGrid/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <CameraGrid />
            </MemoryRouter>);
    });
});

describe("<CameraDetail/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <CameraDetail />
            </MemoryRouter>);
    });
});

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
import ParkDetail from '../src/components/ParkDetailPage.js'
import ParkGrid from '../src/components/ParkGrid.js'
import PhotoDetail from '../src/components/PhotoDetailPage.js'
import PhotoGrid from '../src/components/PhotoGrid.js'
import ScrollableTable from '../src/components/ScrollableTable.js'
import SortDropdown from '../src/components/SortDropdown.js'
import FilterDropdown from '../src/components/FilterDropdown.js'
import ResetDropdown from '../src/components/ResetDropdown.js'
import EmptyPage from '../src/components/EmptyPage.js'
import SearchBar from '../src/components/SearchBar.js'
import SearchItem from '../src/components/SearchItem.js'
import Search from '../src/components/Search.js'

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
      expect(test.html()).to.contain('Cannon');
      expect(test.html()).to.contain('5');
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

describe("<ParkGrid/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <ParkGrid />
            </MemoryRouter>);
    });
});

describe("<ParkDetail/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <ParkDetail />
            </MemoryRouter>);
    });
});

describe("<PhotoGrid/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <PhotoGrid />
            </MemoryRouter>);
    });
});

describe("<PhotoDetail/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<MemoryRouter>
              <PhotoDetail />
            </MemoryRouter>);
    });
});

describe("<SortDropdown/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("pass props correctly", function() {
       var wrapper = shallow(<SortDropdown
                dropTitle="Title"
                items={["firstSort", "secondSort", "thirdSort"]}
                types={["a-z","a-z","a-z","a-z","a-z","a-z"]}
                />
      );
      expect(wrapper.html()).to.contain('Title');
      expect(wrapper.html()).to.contain('firstSort');
      expect(wrapper.html()).to.contain('a-z');
    });
});

describe("<SortDropdown/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<SortDropdown
                dropTitle={"Title"}
                items={"firstSort", "secondSort", "thirdSort"}
                types={["a-z","a-z","a-z","a-z","a-z","a-z"]}
                />
      );
    });
});

describe("<FilterDropdown/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<FilterDropdown
                dropTitle={"Title"}
                options={["filter1", "filter2", "filter3"]}
                />
      );
    });
});

describe("<FilterDropdown/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("pass props correctly", function() {
       var wrapper = shallow(<FilterDropdown
                dropTitle="Title"
                options={["firstSort", "secondSort", "thirdSort"]}
                />
      );
      expect(wrapper.html()).to.contain('Title');
      expect(wrapper.html()).to.contain('firstSort');
      expect(wrapper.html()).to.contain('secondSort');
    });
});

describe("<ResetDropdown/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<ResetDropdown types={["clear1", "clear2"]}/>
      );
    });
});

describe("<ResetDropdown/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("pass props correctly", function() {
       var wrapper = shallow(<ResetDropdown types={["clear1", "clear2"]}/>
      );
      expect(wrapper.html()).to.contain('clear1');
      expect(wrapper.html()).to.contain('clear2');
    });
});

describe("<EmptyPage/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<EmptyPage/>
      );
    });
});

describe("<SearchBar/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(<SearchBar/>
      );
    });
});

describe("<SearchItem/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(
        <MemoryRouter>
          <SearchItem data={{id: false, name: null}}/>
        </MemoryRouter>
      );
    });
});

describe("<Search/>", function(){
  	before(function () {
  		this.jsdom = require('jsdom-global')()
  	})

  	after(function () {
  		this.jsdom()
  	})

    it("should render", function() {
      shallow(
        <MemoryRouter>
          <Search location={{search: "hello"}}/>
        </MemoryRouter>
      );
    });
});

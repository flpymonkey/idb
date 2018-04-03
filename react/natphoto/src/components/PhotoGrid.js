import React, {Component} from "react";
import Grid from './GridPage.js';

export default class PhotoGrid extends Component {

  constructor(props){
	super(props);

    this.state = {
      photos: []
    };
  }

  componentDidMount() {

    fetch('http://api.natphoto.me/photos', {
    	method: 'GET',
    	dataType: 'json'
    }).then(results => {
    	return results.json();
    }).then(data => {
    	var curr_photos = data.map((elem) => ({
            img: elem.image_url,
            title: elem.title,
            subtitle: "by " + elem.photographer,
            info: elem.likes + " likes",
            detail_url: "/photos/" + elem.id,
            sort1: elem.title,
            sort2: parseInt(elem.likes, 10),
            sort3: parseInt(elem.date, 10)
        }));
      	this.setState({
      		photos: curr_photos
      	});
    })
  }

  render () {
	return (
	  <Grid
      data={this.state.photos}
      sortAttributes={["Title", "# Likes", "Date"]}
      sortTypes={["alpha", "numerical", "numerical"]}
      filterOptions1={[]}
      filterOptions2={["< 10", "11 - 20", "21 - 30 ", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80", "81 - 90", "91 - 100", "101 - 200", "201 - 300",
      "301 - 400", "> 400"]}
      filterOptions3={["< 2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016",
      "2017", "2018"]}
      title="Photos"
      id="photoGrid"
    />
	);
  }
}

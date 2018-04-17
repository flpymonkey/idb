import React, {Component} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container} from 'reactstrap';
import Pagination from 'react-js-pagination';
import '../stylesheets/gridpage.css';
import '../stylesheets/general.css';
import SortDropdown from './SortDropdown.js';
import FilterDropdown from './FilterDropdown.js';
import ResetDropdown from './ResetDropdown.js';
import { SyncLoader } from 'react-spinners';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import Datasort from 'react-data-sort';


export default class Grid extends Component {

 	constructor(props) {
		super(props);

    this.setSortBy = this.setSortBy.bind(this);
    this.setFilter1 = this.setFilter1.bind(this);
    this.setFilter2 = this.setFilter2.bind(this);
    this.filter1Data = this.filter1Data.bind(this);
    this.filter1ConditionValue = this.filter1ConditionValue.bind(this);
    this.filter1ConditionRange = this.filter1ConditionRange.bind(this);
    this.filter2Data = this.filter2Data.bind(this);
    this.filter2ConditionValue = this.filter2ConditionValue.bind(this);
    this.filter2ConditionRange = this.filter2ConditionRange.bind(this);
    this.clearFilter = this.clearFilter.bind(this);

		this.state = {
      activePage: 1,
      sortBy: "sort1",
      sortTitle: this.props.sortAttributes[0] + ": " + this.props.sortTypes[0],
      direction: "asc",
      filter1: "",
      filter2: "",
      filter1Title: this.props.filterAttributes[0],
      filter2Title: this.props.filterAttributes[1]
		}
	}

  filter1ConditionRange(param) {
    return this.generalRangeFilter(param.filter1, this.state.filter1);
  }

  filter2ConditionRange(param) {
    return this.generalRangeFilter(param.filter2, this.state.filter2);
  }

  generalRangeFilter(item, condition) {
    var newCond = condition.split(' ');
    if(newCond[0].charAt(0) === '$') {
      var lower = newCond[0].substring(1);
      var upper = newCond[2].substring(1);
      return this.checkingCondition(item, parseInt(lower, 10), parseFloat(newCond[1], 10), parseInt(upper, 10), newCond[0]);
    } else if (Number.isInteger(item)) {
        return this.checkingCondition(item, parseInt(newCond[0], 10), parseInt(newCond[1], 10), parseInt(newCond[2], 10), newCond[0]);
    } else { // special case for megapixels
      return this.checkingCondition(item, parseFloat(newCond[0], 10), parseFloat(newCond[1], 10), parseFloat(newCond[2], 10)+1, newCond[0]);
    }
  }

  checkingCondition(item, lower, condVal, upper, condition) {
    if(condition === "<") {
      return item < condVal;
    } else if(condition === ">") {
      return item > condVal;
    }
    return item >= lower && item <= upper;
  }

  filter1ConditionValue(param) {
    return this.generalValFilter(param.filter1, this.state.filter1);
  }

  filter2ConditionValue(param) {
    return this.generalValFilter(param.filter2, this.state.filter2);
  }

  generalValFilter(item, condition) {
    if(condition === "< 2000") {
      condition = condition.split(' ');
      return this.checkingCondition(item, 0, parseInt(condition[1], 10), 0, condition)
    }
    if(item instanceof Date) {
      return item === condition;
    }
    return item.includes(condition);
  }

  filter1Data(data) {
    if (this.props.filter1Range) {
      return data.filter(this.filter1ConditionRange);
    } else {
      return data.filter(this.filter1ConditionValue);
    }
  }

  filter2Data(data) {
    if (this.props.filter2Range) {
      return data.filter(this.filter2ConditionRange);
    } else {
      return data.filter(this.filter2ConditionValue);
    }
  }

  setSortBy(sort, direction, label) {
    this.setState({sortBy: sort, direction: direction, sortTitle: label, activePage: 1});
  }

  setFilter1(filter) {
    this.setState({filter1: filter, filter1Title: filter, activePage: 1});
  }

  setFilter2(filter) {
    this.setState({filter2: filter, filter2Title: filter, activePage: 1});
  }

  clearFilter(filter) {
    if (filter === "filter1") {
      console.log(1)
      this.setState({filter1: "", filter1Title: this.props.filterAttributes[0], activePage: 1})
    } else {
      console.log(2)
      this.setState({filter2: "", filter2Title: this.props.filterAttributes[1], activePage: 1})
    }
  }

  handlePageChange(pageNumber) {
      this.setState({activePage: pageNumber});
  }

  getCards(data) {
    let endVal = (this.state.activePage * 16)
    let startVal = ((this.state.activePage - 1) * 16)
    const slice = data.slice(startVal, endVal)
    return slice.map((elem, i) =>
      <GridItemCard key={i} data={elem} />
    )
  }

	render() {
    console.log("render is being called");
    const {sortBy, direction} = this.state
    var data = this.props.data;

    if(this.state.filter1 !== "") {
      data = this.filter1Data(data);
    }
    if(this.state.filter2 !== "") {
      data = this.filter2Data(data);
    }

    if (data.length === 0 && (this.state.filter1 !== "" || this.state.filter2 !== "")) {
      return (
        <Container fluid>
          <GridHeader data={this.props} state={this.state} sortFunc={this.setSortBy} filterFunc1={this.setFilter1} filterFunc2={this.setFilter2} clearFunc={this.clearFilter} />
          <Row>
  					<Col sm="4"/>
  					<Col sm="4">
  						<div className="emptyFilterTitle">Sorry!</div>
  					</Col>
  				</Row>
  				<Row>
  					<Col sm="3"/>
  					<Col sm="6">
  						<div className="emptyFilterMessage">There is no data that fits your filters, please choose other filters</div>
  					</Col>
  				</Row>
        </Container>
      );
    }else {
      return (
          <Container fluid>
            <GridHeader data={this.props} state={this.state} sortFunc={this.setSortBy} filterFunc1={this.setFilter1} filterFunc2={this.setFilter2} clearFunc={this.clearFilter} />
            <Datasort
              data={data}
              sortBy={sortBy}
              direction={direction}
              render={({
                data,
                setSortBy,
                sortBy,
                setDirection,
                direction
              }) => {
                return (
                  <div>
                  <Row>
                    {this.getCards(data)}
                  </Row>
                  <Row>
                    <Col className="paginationCol">
                      <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={16}
                        totalItemsCount={data.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                      />
                    </Col>
                  </Row>
                  </div>

                );
              }}
            />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          </Container>
  		);
    }
	}
}

class GridItemCard extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: true };
  }

  handleLoad(image) {
      this.setState({ loading: false });
  }

  // Wait until the image is loaded, then display it. Display a spinner in
  // its place when it is still loading.
  renderImage() {
    if (this.state.loading) {
      return (
        <div>
        <Row>
          <div className="col-xs-6 col-xs-offset-3 spinner">
            <SyncLoader color={"#009d00"} size={10} margin={"5px"} />
          </div>
        </Row>
        <CardImg className="hidden"
             src={this.props.data.img}
             alt="Card image cap" onLoad={this.handleLoad.bind(this)} />
        </div>
      );
    } else {
      return (
        <CardImg className="card-img"
             src={this.props.data.img}
             alt="Card image cap" onLoad={this.handleLoad.bind(this)} />
      );
    }
  }

  render() {
      return(
        <Col xl="3" lg="3" md="3" sm="3">
          <div className="cardDiv">
            <Card id={this.props.data.detail_url}>
              <Link to={this.props.data.detail_url}>
              <div className="imageContainer">
                {this.renderImage()}
              </div>
              <CardBody>
                <CardTitle>{this.props.data.title}</CardTitle>
                <CardSubtitle>{this.props.data.subtitle}</CardSubtitle>
                <CardText>{this.props.data.info}</CardText>
              </CardBody>
              </Link>
            </Card>
          </div>
        </Col>
      );
  }
}


class GridHeader extends Component {
  render() {
    return (
      <div>
        <Row>
           <Col sm="4"></Col>
           <Col className="gridTitle" sm="4"><h1>{this.props.data.title}</h1></Col>
           <Col sm="4"></Col>
        </Row>
        <Row className="dropDowns">
           <Col sm="2" className="dropdownLabel">Sort by:</Col>
           <Col sm="2">
             <SortDropdown dropTitle={this.props.state.sortTitle}
                           items={this.props.data.sortAttributes}
                           types={this.props.data.sortTypes}
                           sortFunc={this.props.sortFunc}/>
           </Col>
           <Col sm="2" className="dropdownLabel">Filter by:</Col>
           <Col sm="2"><FilterDropdown style={{zIndex: 1000}} dropTitle={this.props.state.filter1Title} options={this.props.data.filterOptions1} filterFunc={this.props.filterFunc1}/></Col>
           <Col sm="2"><FilterDropdown dropTitle={this.props.state.filter2Title} options={this.props.data.filterOptions2} filterFunc={this.props.filterFunc2}/></Col>
           <Col sm="2"><ResetDropdown types={this.props.data.filterAttributes} clearFunc={this.props.clearFunc}/></Col>
        </Row>
      </div>
    );
  }
}

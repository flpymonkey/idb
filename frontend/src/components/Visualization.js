import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import * as d3 from 'd3';
import PieChart from 'react-d3-basic';

export default class Visualization extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width : 700,
      height : 300,
      margins : {left: 100, right: 100, top: 50, bottom: 50},
      title : "Zip Codes",
      value : function(d) {
        return +d.number;
      },
      chartSeries : [
        {
          field: 'number',
          name: 'label'
        }
      ],
    };
  }

  getData() {
    return {
      "list": [
        {
          "label": "76504",
          "number": 1,
          "value": 76504
        },
        {
          "label": "76530",
          "number": 1,
          "value": 76530
        },
        {
          "label": "76541",
          "number": 1,
          "value": 76541
        },
        {
          "label": "76574",
          "number": 9,
          "value": 76574
        },
        {
          "label": "76577",
          "number": 2,
          "value": 76577
        },
        {
          "label": "76877",
          "number": 1,
          "value": 76877
        },
        {
          "label": "78013",
          "number": 1,
          "value": 78013
        },
        {
          "label": "78064",
          "number": 1,
          "value": 78064
        },
        {
          "label": "78070",
          "number": 2,
          "value": 78070
        },
        {
          "label": "78108",
          "number": 2,
          "value": 78108
        },
        {
          "label": "78109",
          "number": 2,
          "value": 78109
        },
        {
          "label": "78123",
          "number": 1,
          "value": 78123
        },
        {
          "label": "78130",
          "number": 53,
          "value": 78130
        },
        {
          "label": "78132",
          "number": 2,
          "value": 78132
        },
        {
          "label": "78133",
          "number": 6,
          "value": 78133
        },
        {
          "label": "78148",
          "number": 2,
          "value": 78148
        },
        {
          "label": "78154",
          "number": 10,
          "value": 78154
        },
        {
          "label": "78155",
          "number": 26,
          "value": 78155
        },
        {
          "label": "78205",
          "number": 2,
          "value": 78205
        },
        {
          "label": "78216",
          "number": 2,
          "value": 78216
        },
        {
          "label": "78217",
          "number": 3,
          "value": 78217
        },
        {
          "label": "78218",
          "number": 1,
          "value": 78218
        },
        {
          "label": "78219",
          "number": 1,
          "value": 78219
        },
        {
          "label": "78232",
          "number": 1,
          "value": 78232
        },
        {
          "label": "78233",
          "number": 4,
          "value": 78233
        },
        {
          "label": "78247",
          "number": 4,
          "value": 78247
        },
        {
          "label": "78266",
          "number": 2,
          "value": 78266
        },
        {
          "label": "78602",
          "number": 14,
          "value": 78602
        },
        {
          "label": "78605",
          "number": 1,
          "value": 78605
        },
        {
          "label": "78606",
          "number": 2,
          "value": 78606
        },
        {
          "label": "78610",
          "number": 5,
          "value": 78610
        },
        {
          "label": "78611",
          "number": 3,
          "value": 78611
        },
        {
          "label": "78612",
          "number": 5,
          "value": 78612
        },
        {
          "label": "78613",
          "number": 17,
          "value": 78613
        },
        {
          "label": "78615",
          "number": 1,
          "value": 78615
        },
        {
          "label": "78617",
          "number": 3,
          "value": 78617
        },
        {
          "label": "78619",
          "number": 1,
          "value": 78619
        },
        {
          "label": "78620",
          "number": 6,
          "value": 78620
        },
        {
          "label": "78621",
          "number": 7,
          "value": 78621
        },
        {
          "label": "78624",
          "number": 1,
          "value": 78624
        },
        {
          "label": "78626",
          "number": 8,
          "value": 78626
        },
        {
          "label": "78628",
          "number": 7,
          "value": 78628
        },
        {
          "label": "78629",
          "number": 1,
          "value": 78629
        },
        {
          "label": "78633",
          "number": 1,
          "value": 78633
        },
        {
          "label": "78634",
          "number": 2,
          "value": 78634
        },
        {
          "label": "78636",
          "number": 2,
          "value": 78636
        },
        {
          "label": "78639",
          "number": 2,
          "value": 78639
        },
        {
          "label": "78640",
          "number": 14,
          "value": 78640
        },
        {
          "label": "78641",
          "number": 4,
          "value": 78641
        },
        {
          "label": "78642",
          "number": 1,
          "value": 78642
        },
        {
          "label": "78644",
          "number": 4,
          "value": 78644
        },
        {
          "label": "78645",
          "number": 6,
          "value": 78645
        },
        {
          "label": "78648",
          "number": 2,
          "value": 78648
        },
        {
          "label": "78653",
          "number": 1,
          "value": 78653
        },
        {
          "label": "78654",
          "number": 10,
          "value": 78654
        },
        {
          "label": "78657",
          "number": 5,
          "value": 78657
        },
        {
          "label": "78660",
          "number": 10,
          "value": 78660
        },
        {
          "label": "78664",
          "number": 21,
          "value": 78664
        },
        {
          "label": "78665",
          "number": 5,
          "value": 78665
        },
        {
          "label": "78666",
          "number": 30,
          "value": 78666
        },
        {
          "label": "78669",
          "number": 2,
          "value": 78669
        },
        {
          "label": "78673",
          "number": 2,
          "value": 78673
        },
        {
          "label": "78676",
          "number": 1,
          "value": 78676
        },
        {
          "label": "78681",
          "number": 20,
          "value": 78681
        },
        {
          "label": "78701",
          "number": 114,
          "value": 78701
        },
        {
          "label": "78702",
          "number": 30,
          "value": 78702
        },
        {
          "label": "78703",
          "number": 16,
          "value": 78703
        },
        {
          "label": "78704",
          "number": 80,
          "value": 78704
        },
        {
          "label": "78705",
          "number": 22,
          "value": 78705
        },
        {
          "label": "78712",
          "number": 7,
          "value": 78712
        },
        {
          "label": "78717",
          "number": 9,
          "value": 78717
        },
        {
          "label": "78719",
          "number": 2,
          "value": 78719
        },
        {
          "label": "78721",
          "number": 1,
          "value": 78721
        },
        {
          "label": "78722",
          "number": 13,
          "value": 78722
        },
        {
          "label": "78723",
          "number": 9,
          "value": 78723
        },
        {
          "label": "78724",
          "number": 2,
          "value": 78724
        },
        {
          "label": "78726",
          "number": 5,
          "value": 78726
        },
        {
          "label": "78727",
          "number": 5,
          "value": 78727
        },
        {
          "label": "78728",
          "number": 5,
          "value": 78728
        },
        {
          "label": "78729",
          "number": 2,
          "value": 78729
        },
        {
          "label": "78730",
          "number": 3,
          "value": 78730
        },
        {
          "label": "78731",
          "number": 6,
          "value": 78731
        },
        {
          "label": "78732",
          "number": 3,
          "value": 78732
        },
        {
          "label": "78734",
          "number": 4,
          "value": 78734
        },
        {
          "label": "78735",
          "number": 9,
          "value": 78735
        },
        {
          "label": "78736",
          "number": 3,
          "value": 78736
        },
        {
          "label": "78737",
          "number": 1,
          "value": 78737
        },
        {
          "label": "78738",
          "number": 14,
          "value": 78738
        },
        {
          "label": "78739",
          "number": 3,
          "value": 78739
        },
        {
          "label": "78741",
          "number": 12,
          "value": 78741
        },
        {
          "label": "78744",
          "number": 5,
          "value": 78744
        },
        {
          "label": "78745",
          "number": 15,
          "value": 78745
        },
        {
          "label": "78746",
          "number": 20,
          "value": 78746
        },
        {
          "label": "78747",
          "number": 1,
          "value": 78747
        },
        {
          "label": "78748",
          "number": 3,
          "value": 78748
        },
        {
          "label": "78749",
          "number": 7,
          "value": 78749
        },
        {
          "label": "78750",
          "number": 14,
          "value": 78750
        },
        {
          "label": "78751",
          "number": 16,
          "value": 78751
        },
        {
          "label": "78752",
          "number": 16,
          "value": 78752
        },
        {
          "label": "78753",
          "number": 13,
          "value": 78753
        },
        {
          "label": "78754",
          "number": 1,
          "value": 78754
        },
        {
          "label": "78756",
          "number": 10,
          "value": 78756
        },
        {
          "label": "78757",
          "number": 12,
          "value": 78757
        },
        {
          "label": "78758",
          "number": 22,
          "value": 78758
        },
        {
          "label": "78759",
          "number": 23,
          "value": 78759
        },
        {
          "label": "78767",
          "number": 1,
          "value": 78767
        },
        {
          "label": "78798",
          "number": 4,
          "value": 78798
        },
        {
          "label": "78799",
          "number": 1,
          "value": 78799
        },
        {
          "label": "78946",
          "number": 1,
          "value": 78946
        },
        {
          "label": "78957",
          "number": 2,
          "value": 78957
        }
      ],
      "status": "OK",
      "total": 110
    };
  }

  render() {
    return(
      <PieChart
      title= {this.state.title}
      data= {this.getData().list}
      width= {this.state.width}
      height= {this.state.height}
      chartSeries= {this.state.chartSeries}
      value = {this.state.value}
      name = {this.state.name}
      />
    );
  }
}


  // getCircles() {
  //   var data = this.getData();
  //   var sortedZips = data.list.sort(function(a, b){
  //     return b.number - a.number;
  //   })
  //   sortedZips = sortedZips.slice(0, 10);
  //   var zips = sortedZips.map((o, i) => (
  //       <circle
  //       key={i}
  //       cx={(i * 100) + 30}
  //       cy="60"
  //       r={o.number}
  //       style={{ fill: 'steelblue' }}
  //       />
  //   ))
  //   return zips;
  // }

  // render() {
  //   return(
  //     <svg width="auto" height="2000">
  //       {this.getCircles()}
  //     </svg>
  //   );
  // }

import React from 'react';
import PieChart from 'react-svg-piechart';

const color = [
  '#00008B', '#008B8B', '#B8860B', '#006400',
  '#A9A9A9', '#BDB76B', '#8B008B', '#556B2F',
  '#FF8C00', '#9932CC', '#8B0000', '#E9967A',
  '#8FBC8F', '#483D8B', '#2F4F4F', '#00CED1',
  '#9400D3', '#FF1493', '#00BFFF', '#696969',
  '#696969', '#1E90FF', '#B22222', '#FFFAF0',
  '#228B22', '#FF00FF'
]

const Circle = ({payments}) => {
  return(
    <div className="circle">
      <PieChart
        className="test"
        expandOnHover={true}
        expandSize={5}
        data = {
          payments.map((payment, index) => {
            return {
              color: color[index],
              value: payment.sum,
              title: payment.category + ', ' + payment.sum
            }
          })
        }
      />
    </div>
  )
}

export default (Circle)
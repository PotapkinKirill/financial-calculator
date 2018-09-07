import React from 'react';
import PieChart from 'react-svg-piechart';
import ColorHash from 'color-hash'

const colorHash = new ColorHash()

const Circle = ({payments}) => {
  
  const data = payments.map((payment) => {
    let color
    if (payment.color)
      color = payment.color
    else 
      color = colorHash.hex(payment.name)
    return {
      color: color,
      value: payment.sum,
      title: payment.name + ', ' + payment.sum
    }
  })
  return(
    <div className="circle">
      <PieChart
        className="test"
        expandOnHover={true}
        expandSize={5}
        data = {data}
      />
    </div>
  )
}

export default (Circle)
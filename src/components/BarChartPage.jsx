import React ,{useEffect, useRef, useState}from 'react'
import '../App.scss'
import * as d3 from 'd3'



function BarChartPage() {
    
    
    

   
    
    
    
    const d3Chart = useRef()
    const RandomNumberGenerator=()=>{
        // random number between 0-500
        let value3 = Math.floor(Math.random() * 500);
        return value3;
    
    }
    const sample=[
        {category:'A', quantity:RandomNumberGenerator()},
        {category:'B', quantity:RandomNumberGenerator()},
        {category:'C', quantity:RandomNumberGenerator()},
        {category:'D', quantity:RandomNumberGenerator()},
        {category:'E', quantity:RandomNumberGenerator()},
    ]

    useEffect(()=>{
       
        

        const margin ={top:30, right:10, bottom:0, left:50}

        const chartwidth= parseInt(d3.select('#d3demo').style('width'))- margin.left - margin.right
        const chartheight= parseInt(d3.select('#d3demo').style('height'))- margin.top - margin.bottom

        const svg = d3.select(d3Chart.current)
                        .attr('width', chartwidth + margin.left + margin.right)
                        .attr('width', chartheight + margin.top + margin.bottom)

        const x = d3.scaleBand()
                    .domain(d3.range(sample.length))
                    .range([margin.left, chartwidth- margin.right])
                    .padding(0.1)

        svg.append('g')
            .attr('transform', 'translate(0,' + chartheight + ')')
            .call(d3.axisBottom(x).tickFormat(i=>sample[i].category).tickSizeOuter(0))

        // y axis
            const max = d3.max(sample, function(d){return d.quantity})

            const y = d3.scaleLinear()
                         .domain([0, max])
                         .range([chartheight, margin.top])

            svg.append('g')
                    .attr('transform', 'translate(' + margin.left + ',0)')
                    .call(d3.axisLeft(y))

            
            svg.append('g')
                    .attr('fill', '#33ADFF')
                    .selectAll('rect')
                    .data(sample)
                    .join('rect')
                          .attr('x', (d,i) => x(i))
                          .attr('y', d=> y(d.quantity))
                          .attr('height', d=>y(0)-y(d.quantity))
                          .attr('width', x.bandwidth())

    })
  
  return (
    <div className='backd' >
        <div id='d3demo' >
            <svg ref={d3Chart}></svg>

                <a href='/barchart' className='bbtn'>
                    <button  >Click</button>
                </a>
        </div>
        
        
    </div>
  )
}

export default BarChartPage
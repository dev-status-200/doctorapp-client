import React from 'react'

const Grid = ({data}) => {
  return (
    <div className="services-grid">
      {data.length>0 ?<>
    {data.map((service, index) => (
      <div key={index} className="service-card">
        <div className="service-header">
          {service.service}
          <span className="remove-service">✖</span>
        </div>
        <div className="service-price">{service.price}</div>
      </div>
    ))}
    </>:<>No prices added yet</>}
  </div>
  )
}

export default Grid

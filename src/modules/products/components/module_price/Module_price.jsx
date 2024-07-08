import React from "react"
const price = [
  {
    one: {
      min: 50,
      max: 500,
      price: 5,
    },
    tow: {
      min: 500,
      max: 1000,
      price: 4,
    },
    three: {
      min: 1000,
      max: 10000,
      price: 2,
    },
    four: {
      min: 10000,
      max: 100000,
      price: 0.5,
    },
  },
]
const Module_price = () => {
  return (
    <div className="border-b-2">
      {price.map((item, index) => (
        <div className="flex flex-wrap" key={index}>
          {Object.keys(item).map((key) => (
            <div key={key} className="p-2 w-2/4">
              <p>
                {item[key].min} - {item[key].max}
              </p>

              <p>₹ {item[key].price}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Module_price

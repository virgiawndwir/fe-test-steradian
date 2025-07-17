import React from 'react'

function CarsTable() {
  return (
    <div>
      <div className="relative overflow-x-auto mx-10 mt-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                  ID
              </th>
              <th scope="col" className="px-6 py-3">
                  Name
              </th>
              <th scope="col" className="px-6 py-3">
                  Image Path
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cars.map((car) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={car.id}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {car.id}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {car.name}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {car.image}
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CarsTable
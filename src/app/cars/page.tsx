import Link from 'next/link'

const cars = [
  { id: 1, name: 'Classic Mustang', year: 1969 },
  { id: 2, name: 'Tesla Model S', year: 2022 },
  { id: 3, name: 'Toyota Supra', year: 1998 },
]

export default function Cars() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{car.name}</h2>
            <p className="mb-4">Year: {car.year}</p>
            <Link href={`/cars/${car.id}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


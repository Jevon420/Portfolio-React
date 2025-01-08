import Link from 'next/link'

const posts = [
  { id: 1, title: 'Restoring My Classic Mustang', date: '2023-05-15' },
  { id: 2, title: 'The Future of Electric Cars', date: '2023-05-10' },
  { id: 3, title: 'Tuning My Toyota Supra', date: '2023-05-05' },
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Car Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Published on {post.date}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              Read Post
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


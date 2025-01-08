'use client'

import { useState, useEffect } from 'react'
import { apiRequest } from '@/lib/utils';

interface Project {
  id: number
  title: string
  status: string
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiRequest('/projects', 'GET', null);
        setProjects(response.data);
      } catch (err) {
        setError('Failed to fetch projects');
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Status: {project.status}</p>
            <button className="text-blue-600 hover:underline">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

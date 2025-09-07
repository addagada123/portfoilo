import React, { useState } from 'react'
import Cursor from './Cursor'
import profilePic from './profile.jpg'

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false)

  const name = 'Bhanuteja Addagada'
  const title = 'Computer Science & Business Systems - Full-Stack & AR Developer'

  const projects = [
    {
      title: 'AR Virtual Try-On System',
      desc: 'Real-time clothing overlay using MediaPipe + OpenCV. Gesture controls and front/back garment switching.',
      link: 'https://github.com/addagada123/AR-Virtual-Try-on',
    },
    {
      title: 'House Rental Management System',
      desc: 'Full-stack Java application with SQL backend and responsive GUI. Secure authentication and CRUD operations.',
      link: 'https://github.com/addagada123/House-rental-system',
    },
    {
      title: 'AR Indoor Navigation System',
      desc: 'Indoor AR navigation using Unity, NavMesh and LiDAR integration. Accurate environment alignment with Blender models.',
      link: 'https://github.com/addagada123/ar_Indoor_navigation',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 text-slate-100 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex flex-col items-center">
        {/* Profile Photo with Modal Trigger */}
        <button onClick={() => setShowModal(true)}>
          <img 
            src={profilePic} 
            alt="Bhanuteja Addagada" 
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-slate-700 hover:scale-105 transition"
          />
        </button>
        <h1 className="text-2xl font-extrabold tracking-tight mt-4">{name}</h1>
        <p className="text-sm text-slate-300 mt-1">{title}</p>
      </header>

      {/* Modal for full image */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img 
            src={profilePic} 
            alt="Full view" 
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mt-8">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article 
              key={p.title} 
              className="bg-slate-800 rounded-xl p-5 border border-slate-700 
                         hover:scale-125 hover:shadow-2xl hover:border-emerald-400 
                         transition transform duration-300"
            >
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="underline mt-3 inline-block">View repo</a>
            </article>
          ))}
        </div>
      </main>

      <Cursor />
    </div>
  )
}

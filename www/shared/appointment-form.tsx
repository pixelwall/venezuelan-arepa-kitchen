import V, { setAnim } from '@/components/viewport'
import { useState } from 'react'
import { ChevronRight16 } from '@carbon/icons-react'

const AppointmentForm = ({ title }: { title?: boolean }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  return (
    <div className="w-full lg:w-4/10 mx-auto mb-8 px-6">
      {title && (
        <V className="animate" oneWay style={setAnim({x: '-0.5rem'})}>
          <h2 className="text-x-gray-800 t-h2 font-title lg:-ml-24 mb-6">Make an appointment</h2>
        </V>
      )}
      <p
        className="mb-4 font-bold text-white font-title"
      >
        Complete name
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <input
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: Maria Gabriela"
          value={form.name}
          onChange={(e) => setForm(f => ({
            ...f,
            name: e.target.value,
          }))}
        />
      </V>

      <p
        className="mb-4 font-bold text-white font-title"
      >
        Email
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <input
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: mariagabriela@gmail.com"
          value={form.email}
          onChange={(e) => setForm(f => ({
            ...f,
            email: e.target.value,
          }))}
        />
      </V>

      <p
        className="mb-4 font-bold text-white font-title"
      >
        Subject
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <input
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Ex: Cost"
          value={form.subject}
          onChange={(e) => setForm(f => ({
            ...f,
            subject: e.target.value,
          }))}
        />
      </V>

      <p
        className="mb-4 font-bold text-white font-title"
      >
        Message
      </p>
      <V className="w-full mb-6 animate" oneWay>
        <textarea
          className="w-full px-0 input font-title"
          style={{ paddingLeft: '0', paddingRight: '0' }}
          placeholder="Write a message..."
          value={form.message}
          rows={6}
          onChange={(e) => setForm(f => ({
            ...f,
            message: e.target.value,
          }))}
        />
      </V>

      <button
        className="flex items-center justify-center w-full py-2 mt-4 duration-200 bg-x-gray-800 hover:bg-x-gray-700 text-white font-title"
      >
        Send message <ChevronRight16 className="ml-3" />
      </button>
    </div>
  )
}

export default AppointmentForm
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
    <div className="mx-auto mb-8 w-full px-6 lg:w-4/10">
      {title && (
        <V className="animate" oneWay style={setAnim({x: '-0.5rem'})}>
          <h2 className="font-title mb-6 text-x-gray-800 t-h2 lg:-ml-24">Make a reservation</h2>
        </V>
      )}
      <p
        className="font-bold font-title text-white mb-4"
      >
        Complete name
      </p>
      <V className="mb-6 w-full animate" oneWay>
        <input
          className="font-title w-full px-0 input"
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
        className="font-bold font-title text-white mb-4"
      >
        Email
      </p>
      <V className="mb-6 w-full animate" oneWay>
        <input
          className="font-title w-full px-0 input"
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
        className="font-bold font-title text-white mb-4"
      >
        Subject
      </p>
      <V className="mb-6 w-full animate" oneWay>
        <input
          className="font-title w-full px-0 input"
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
        className="font-bold font-title text-white mb-4"
      >
        Message
      </p>
      <V className="mb-6 w-full animate" oneWay>
        <textarea
          className="font-title w-full px-0 input"
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
        className="flex font-title bg-x-gray-800 mt-4 text-white w-full py-2 duration-200 items-center justify-center hover:bg-x-gray-700"
      >
        Send message <ChevronRight16 className="ml-3" />
      </button>
    </div>
  )
}

export default AppointmentForm

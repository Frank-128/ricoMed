import React from 'react'

const Navbar = () => {
  return (
    <section className="basis-1/5 p-5  bg-slate-50">
    <ul className="flex flex-col gap-4">
      <Link to="/admin">
        <li className={`flex items-center  ${active==="dashboard"?'bg-blue-900 text-gray-200':'text-gray-700'}  p-2 rounded justify-center gap-3`}>
          <Dashboard /> <b> DashBoard</b>
        </li>
      </Link>
      <Link to="/admin/users">
        <li className={`flex items-center  ${active==="users"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
          <PeopleAltOutlined /> <b> Users</b>
        </li>
      </Link>
      <Link to="/admin/staff">
        <li className={`flex items-center  ${active==="staff"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
          <People /> <b> Staff</b>
        </li>
      </Link>
      <Link to="/admin/patients">
        <li className={`flex items-center  ${active==="patients"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
          <Person4 /> <b> Patients</b>
        </li>
      </Link>
      <Link to="/admin/logs">
        <li className={`flex items-center  ${active==="logs"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
          <Memory /> <b> Logs</b>
        </li>
      </Link>
      <Link to="/admin/payments">
        <li className={`flex items-center  ${active==="payments"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
          <Payment /> <b> Payments</b>
        </li>
      </Link>
      <Link to="/admin/messages">
        <li className={`flex items-center  ${active==="messages"?'bg-blue-900 text-gray-200':'text-gray-700'} p-2 rounded justify-center gap-3`}>
          <Message /> <b> Messages</b>
        </li>
      </Link>
    </ul>
  </section>
  )
}

export default Navbar
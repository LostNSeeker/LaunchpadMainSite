import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { AdminStatsSection } from '../components/admin/AdminStatsSection'

export const AdminDashboard: React.FC = () => {
  const { user, isLoading } = useAuth()
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!user || user.role !== 'admin') {
    navigate('/admin/login')
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 pt-24">
      <div className="container mx-auto px-4 pb-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <p className="text-xl text-gray-600">
            Welcome back, {user.name}! Manage the platform from here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/allowing')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>Founder Approvals</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Review and approve or reject founder registrations
              </p>
              <Button className="w-full">Manage Approvals</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/support')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>Support Messages</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                View and respond to support messages from users
              </p>
              <Button className="w-full">View Messages</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/launchpad/requests')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>Service Requests</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                View and manage project requests from students
              </p>
              <Button className="w-full">View Requests</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/courses')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>Course Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Create courses, manage details, and view enrollments
              </p>
              <Button className="w-full">Manage Courses</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/users')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>User Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Manage users, block/unblock accounts for students and alumni
              </p>
              <Button className="w-full">Manage Users</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/admin/events')}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>Manage Events</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Create and manage events like webinars and podcasts
              </p>
              <Button className="w-full">Manage Events</Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
           <AdminStatsSection />
        </div>
      </div>
    </div>
  )
}

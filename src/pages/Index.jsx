import { useState } from 'react';
import { Calendar, Clock, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">NurseHub</h1>
        <p className="text-xl text-gray-600">Your all-in-one nursing resource</p>
      </header>
      
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold">{currentTime}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" /> Shift Scheduler
            </CardTitle>
            <CardDescription>Manage your work schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">View Schedule</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" /> Time Clock
            </CardTitle>
            <CardDescription>Clock in and out for shifts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Clock In/Out</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2" /> Medical Resources
            </CardTitle>
            <CardDescription>Access medical information</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Browse Resources</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" /> Community Forum
            </CardTitle>
            <CardDescription>Connect with other nurses</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Join Discussion</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

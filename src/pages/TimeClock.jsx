import { useState } from 'react';
import { Button } from '@/components/ui/button';

const TimeClock = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const [clockInTime, setClockInTime] = useState(null);

  const handleClockInOut = () => {
    if (isClockedIn) {
      setIsClockedIn(false);
      setClockInTime(null);
    } else {
      setIsClockedIn(true);
      setClockInTime(new Date());
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Time Clock</h1>
      <div className="text-center">
        <Button onClick={handleClockInOut} className="text-xl px-8 py-4">
          {isClockedIn ? 'Clock Out' : 'Clock In'}
        </Button>
        {isClockedIn && (
          <p className="mt-4">
            Clocked in at: {clockInTime.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimeClock;

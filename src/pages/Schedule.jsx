import { Calendar } from '@/components/ui/calendar';

const Schedule = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Shift Schedule</h1>
      <Calendar
        mode="multiple"
        className="rounded-md border"
      />
    </div>
  );
};

export default Schedule;

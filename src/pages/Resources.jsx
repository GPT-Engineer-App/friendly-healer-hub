import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const resources = [
  { title: 'Drug Reference Guide', description: 'Comprehensive information on medications' },
  { title: 'Medical Procedures Manual', description: 'Step-by-step guides for common procedures' },
  { title: 'Nursing Best Practices', description: 'Latest guidelines and recommendations' },
  { title: 'Patient Care Protocols', description: 'Standardized care plans for various conditions' },
];

const Resources = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Medical Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;

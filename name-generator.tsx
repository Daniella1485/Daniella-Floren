import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');
  
  const firstNames = [
    'Luna', 'Atlas', 'Nova', 'Sage', 'River', 'Phoenix',
    'Aurora', 'Orion', 'Willow', 'Asher', 'Aria', 'Kai'
  ];
  
  const lastNames = [
    'Starling', 'Storm', 'Frost', 'Moon', 'Wind', 'Sky',
    'Shadow', 'River', 'Stone', 'Night', 'Cloud', 'Rose'
  ];
  
  const generateName = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    setGeneratedName(`${firstName} ${lastName}`);
  };
  
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4 font-serif">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-black font-serif">Fantasy Name Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-xl font-medium min-h-[40px] text-black font-serif">
            {generatedName || 'Click to generate a name'}
          </div>
          <Button 
            onClick={generateName}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-serif"
          >
            Generate Name
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NameGenerator;

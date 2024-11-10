import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebaseConfig';

interface FormData {
  name: string;
  mobileNumber: string;
  ratings: {
    generalOpinion: number;
    transportation: number;
    spiritualResources: number;
    healthService: number;
    infrastructure: number;
    marksImprovement: number;
  };
}

const Dashboard: React.FC = () => {
  const [surveyData, setSurveyData] = useState<FormData[]>([]);

  useEffect(() => {
    const surveyRef = ref(database, 'surveys');
    onValue(surveyRef, (snapshot) => {
      const data: { [key: string]: FormData } = snapshot.val() || {};
      const surveys = Object.values(data);
      setSurveyData(surveys);
    });
  }, []);

  return (
    <section id="dashboard" className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Survey Results Dashboard</h2>
      {surveyData.length === 0 ? (
        <p>No survey results available.</p>
      ) : (
        <div className="space-y-6">
          {surveyData.map((survey, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <p><strong>Name:</strong> {survey.name}</p>
              <p><strong>Mobile Number:</strong> {survey.mobileNumber}</p>
              <div className="mt-2">
                <h3 className="font-semibold">Ratings:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>General Opinion:</strong> {survey.ratings.generalOpinion}</li>
                  <li><strong>Transportation:</strong> {survey.ratings.transportation}</li>
                  <li><strong>Spiritual Resources:</strong> {survey.ratings.spiritualResources}</li>
                  <li><strong>Health & Medical Service:</strong> {survey.ratings.healthService}</li>
                  <li><strong>Infrastructure:</strong> {survey.ratings.infrastructure}</li>
                  <li><strong>Marks Improvement:</strong> {survey.ratings.marksImprovement}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
};

export default Dashboard;

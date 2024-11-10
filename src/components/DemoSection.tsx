import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
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

const SurveyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mobileNumber: '',
    ratings: {
      generalOpinion: 0,
      transportation: 0,
      spiritualResources: 0,
      healthService: 0,
      infrastructure: 0,
      marksImprovement: 0,
    },
  });

  const [submitted, setSubmitted] = useState(false); // Track submission state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (field: string, rating: number) => {
    setFormData({
      ...formData,
      ratings: { ...formData.ratings, [field]: rating },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const surveyRef = ref(database, 'surveys');
      await push(surveyRef, formData); // Push data to Firebase
      setSubmitted(true); // Show confirmation message
      setFormData({
        name: '',
        mobileNumber: '',
        ratings: {
          generalOpinion: 0,
          transportation: 0,
          spiritualResources: 0,
          healthService: 0,
          infrastructure: 0,
          marksImprovement: 0,
        },
      });
    } catch (error) {
      console.error('Error saving data to Firebase:', error);
    }
  };

  return (
    <section id="demoform" className="pt-32 pb-24">
    <div>
      {submitted && (
        <div className="text-green-600 mb-4">Submission Successful!</div>
      )}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-yellow-50 shadow-md rounded-lg">
        {/* Name Field */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Mobile Number Field */}
        <div className="mb-5">
          <label htmlFor="mobileNumber" className="block text-lg font-medium text-gray-700 mb-2">Mobile Number *</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Enter Mobile Number..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Rating Fields */}
        <RatingField
          label="What is your general opinion regarding the school?"
          rating={formData.ratings.generalOpinion}
          onChange={(rating) => handleRatingChange('generalOpinion', rating)}
        />
        <RatingField
          label="Transportation"
          rating={formData.ratings.transportation}
          onChange={(rating) => handleRatingChange('transportation', rating)}
        />
        <RatingField
          label="Spiritual Resources"
          rating={formData.ratings.spiritualResources}
          onChange={(rating) => handleRatingChange('spiritualResources', rating)}
        />
        <RatingField
          label="Health & Medical Service"
          rating={formData.ratings.healthService}
          onChange={(rating) => handleRatingChange('healthService', rating)}
        />
        <RatingField
          label="Infrastructure"
          rating={formData.ratings.infrastructure}
          onChange={(rating) => handleRatingChange('infrastructure', rating)}
        />
        <RatingField
          label="Marks Improvement"
          rating={formData.ratings.marksImprovement}
          onChange={(rating) => handleRatingChange('marksImprovement', rating)}
        />

        {/* Submit Button */}
        <button type="submit" className="w-full py-3 px-4 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Submit
        </button>
      </form>
    </div>
    </section>
  );
};

// RatingField Component for star ratings
interface RatingFieldProps {
  label: string;
  rating: number;
  onChange: (rating: number) => void;
}

const RatingField: React.FC<RatingFieldProps> = ({ label, rating, onChange }) => (
  <div className="mb-5">
    <label className="block text-lg font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-3xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  </div>
);

export default SurveyForm;

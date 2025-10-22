import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import type { Student } from '../types/types';
import './StudentDetail.css';

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      if (!id) return;
      setLoading(true);
      setError('');
      try {
        const response = await axios.get<Student>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setStudent(response.data);
      } catch (err) {
        setError('Không thể tải thông tin sinh viên');
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  return (
    <div className="student-detail-container">
      <h2>Chi tiết sinh viên</h2>
      {loading && <p>Đang tải...</p>}
      {error && <p className="error-message">{error}</p>}
      {student && (
        <div className="student-detail">
          <h3>{student.name}</h3>
          <div className="detail-item">
            <strong>Email:</strong> {student.email}
          </div>
          <div className="detail-item">
            <strong>Username:</strong> {student.username}
          </div>
          <div className="detail-item">
            <strong>Phone:</strong> {student.phone}
          </div>
          <div className="detail-item">
            <strong>Website:</strong> {student.website}
          </div>
          <div className="detail-item">
            <strong>Company:</strong> {student.company.name}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDetail;
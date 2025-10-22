import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import type { Student } from '../types/types';
import './StudentList.css';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get<Student[]>('https://jsonplaceholder.typicode.com/users');
        setStudents(response.data);
      } catch (err) {
        setError('Không thể tải danh sách sinh viên');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list-container">
      <h2>Danh sách sinh viên</h2>
      {loading && <p>Đang tải...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="student-list">
        {students.map(student => (
          <div key={student.id} className="student-item">
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <Link to={`/student/${student.id}`} className="view-details-btn">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
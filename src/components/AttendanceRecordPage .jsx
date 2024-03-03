import React, { useEffect, useState } from 'react';

const AttendanceRecordPage = () => {
  const [attendanceRecord, setAttendanceRecord] = useState(null);

  useEffect(() => {
    // Retrieve the attendance record data from local storage
    const storedAttendanceRecord = localStorage.getItem('attendanceRecord');
    if (storedAttendanceRecord) {
      setAttendanceRecord(JSON.parse(storedAttendanceRecord));
    }
  }, []);

  return (
    <div>
      <h1>Attendance Record</h1>
      {attendanceRecord && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>SignIn</th>
              <th>SignOut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{attendanceRecord.date}</td>
              <td>{attendanceRecord.signIn}</td>
              <td>{attendanceRecord.signOut}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AttendanceRecordPage;

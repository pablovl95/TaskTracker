import { useState } from "react";

export default function Attendance() {
    const [attendance, setAttendance] = useState([]);

    const markAttendance = () => {
        setAttendance([...attendance, { id: attendance.length + 1, time: new Date().toLocaleTimeString() }]);
    };

    return (
        <div>
            <h2>Registro de asistencia</h2>
            <button onClick={markAttendance}>Marcar Asistencia</button>
            <ul>
                {attendance.map((entry) => (
                    <li key={entry.id}>Asistencia registrada a las {entry.time}</li>
                ))}
            </ul>
        </div>
    );
}

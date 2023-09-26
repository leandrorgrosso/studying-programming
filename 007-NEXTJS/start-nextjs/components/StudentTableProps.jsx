function StudentTableProps(props) {
  const { students } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Curso</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.index}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTableProps;

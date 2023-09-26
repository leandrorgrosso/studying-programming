import StudentTable from "@/components/StudentTableProps";

const studentsData = [
  { name: "Alice", age: 20, course: "Computer Science" },
  { name: "Bob", age: 22, course: "Engineering" },
  { name: "Charlie", age: 21, course: "Mathematics" },
];

function TabelaEstudantePage() {
  return (
    <div>
      <h1>Tabela de Estudantes</h1>
      <StudentTable students={studentsData} />
    </div>
  );
}

export default TabelaEstudantePage;

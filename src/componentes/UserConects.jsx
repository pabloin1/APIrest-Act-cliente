import useShortPolling from "../hook/useShortPolling";
export default function UserConects() {
    const { data, error } = useShortPolling('http://localhost:3000/API/alumno/alumnosConectados', 1400);
    

  return (
    <div className="flex flex-col items-center">
     
      <div className="stat-title">Alumnos conectados</div>
      <div className="stat-value text-secondary">{data ? data.conectados : 0}</div>
    </div>
  );
}

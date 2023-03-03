import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Maximilien" },
    { id: "matteo", name: "Matteo" },
  ];

  return (
    <>
      <div>Liste des Clients</div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientsPage;

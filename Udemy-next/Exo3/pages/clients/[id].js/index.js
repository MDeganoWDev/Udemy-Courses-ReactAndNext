import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadedProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };

  return (
    <>
      <div>Client Project Page</div>
      <button onClick={loadedProjectHandler}>Load Project A</button>
    </>
  );
};

export default ClientProjectsPage;

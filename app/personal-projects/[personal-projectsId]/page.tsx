export default function PersonalProjectDetails({ params }) {
  console.log("params?", params);

  return (
    <div className="w-full text-center mb-114">
      <h1>Personal Project details {params.publicationsId}</h1>
    </div>
  );
}

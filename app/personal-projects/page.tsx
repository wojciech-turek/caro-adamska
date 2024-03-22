import { client, urlFor } from "../lib/sanity";

async function getData() {
  const query = `
    *[_type == 'personalProjects'] {
      title, gallery, 
    }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

interface PersonalProjectsData {
  title: string;
  gallery: any[];
}

export default async function PersonalProjects() {
  const data: PersonalProjectsData = await getData();

  console.log("DATA", data);

  return (
    <div className="w-full text-center mb-114">
      <h1>Personal projects</h1>
    </div>
  );
}

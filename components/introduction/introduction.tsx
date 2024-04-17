import React from "react";
import { client } from "../../app/lib/sanity";

async function getData() {
  const query = `
  *[_type == 'introduction'] {
    title, subtitle, description
  }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

interface IntroductionData {
  title: string;
  subtitle: string;
  description: string;
}

export default async function Introduction() {
  const { title, subtitle, description }: IntroductionData = await getData();

  return (
    <div className="container w-full text-center mb-30 md:mb-68">
      <h1 className="text-40 lg:text-150 font-medium text-center">{title}</h1>
      <h2 className="lg:text-40 mb-30 font-medium text-center">{subtitle}</h2>
      <h2 className="lg:text-40 font-medium text-center">{description}</h2>
    </div>
  );
}

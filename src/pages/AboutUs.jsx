import React from "react";
import aboutImage from '../assets/about.jpg';
import CEO from '../assets/CEO.jpg';
import COO from '../assets/COO.jpg';
import HeadDesigner from '../assets/HOD.jpg';

const aboutInfo = {
  title: "About Us",
  description: [
    "Welcome to Optical Shop, your number one source for all things eyewear. We're dedicated to giving you the very best of eyeglasses and sunglasses, with a focus on quality, customer service, and uniqueness.",
    "Founded in 2023, Optical Shop has come a long way from its beginnings. When we first started out, our passion for providing the best eyewear drove us to do intense research and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the fashion industry.",
    "We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.",
  ],
  teamSign: "Sincerely, The Optical Shop Team",
  image: "https://placehold.co/600x400",
};

const teamMembers = [
  {
    name: "Jane Doe",
    position: "CEO & Founder",
    description:
      "Jane is the visionary behind Optical Shop, with a passion for eyewear and a commitment to quality and customer service.",
    image: CEO || "https://placehold.co/300x200",
  },
  {
    name: "John Smith",
    position: "Chief Operating Officer",
    description:
      "John oversees the day-to-day operations at Optical Shop, ensuring everything runs smoothly and efficiently.",
    image: COO || "https://placehold.co/300x200",
  },
  {
    name: "Emily Johnson",
    position: "Head of Design",
    description:
      "Emily leads our design team, creating unique and stylish eyewear that our customers love.",
    image: HeadDesigner || "https://placehold.co/300x200",
  },
];

const values = [
  {
    title: "Quality",
    description:
      "We are committed to providing the highest quality eyewear, using the best materials and craftsmanship.",
  },
  {
    title: "Customer Service",
    description:
      "Our customers are our top priority. We strive to provide exceptional service and support to ensure your satisfaction.",
  },
  {
    title: "Innovation",
    description:
      "We are always looking for new ways to improve our products and services, staying ahead of the latest trends and technologies.",
  },
];

const AboutPage = () => {
  return (
    <main className="container mx-auto px-6 py-10 mt-20">
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8">{aboutInfo.title}</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            {aboutInfo.description.map((para, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">{para}</p>
            ))}
            <p className="text-gray-700 font-semibold">{aboutInfo.teamSign}</p>
          </div>
          <div className="md:w-1/2 border-4 border-gray-300 rounded-xl shadow-xl overflow-hidden">
            <img
              src={aboutImage || aboutInfo.image}
              alt="Team at Optical Shop"
              className="w-full h-100 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-3 font-medium">{member.position}</p>
              <p className="text-gray-700 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

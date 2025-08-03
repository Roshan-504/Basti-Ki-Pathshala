import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, HeartHandshake, Users, Award } from 'lucide-react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const aboutData = {
    heroImage: "https://bastikipathshala.org/wp-content/uploads/2024/02/image-scaled.jpg",
    title: "About Us",
    weWorkTogether: {
      heading: "We Work Together",
      text: "At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of 'We Work Together,' we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities.",
    },
    impactStats: [
      { value: 31245, label: "Lives Changed", icon: <Users className="w-12 h-12 text-yellow-500 mx-auto" /> },
      { value: 28976, label: "Meals Served", icon: <HeartHandshake className="w-12 h-12 text-yellow-500 mx-auto" /> },
      { value: 19854, label: "Interns", icon: <BookOpen className="w-12 h-12 text-yellow-500 mx-auto" /> },
      { value: 10989, label: "Supporters", icon: <Award className="w-12 h-12 text-yellow-500 mx-auto" /> },
    ],
    ourMission: {
      heading: "Our Mission: A succinct statement outlining the core purpose and goals of your organization",
      text: "At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed. Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities. Our mission extends beyond the classroom as we work tirelessly to bridge the educational gap and foster long-term, sustainable change in the lives of marginalized families. Together, we strive to rewrite the narrative of education, one child at a time."
    },
    ourStory: {
      heading: "Our Story",
      text: "Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey started with a deep-seated belief in the potential of every child, regardless of their circumstances.\n\n It all began when Sunita, inspired by their own experiences and driven by a passion for social justice, embarked on a mission to address the educational inequalities prevalent in underserved communities. Armed with determination and fueled by compassion, they rallied a team of like-minded individuals who shared their vision of a brighter, more equitable future.\n\nFrom humble beginnings, our organization has grown into a beacon of hope, touching the lives of countless children and families along the way. Each milestone achieved, each barrier overcome, has only strengthened our resolve to continue our mission of empowerment and transformation.\n\nThrough the years, we’ve witnessed the transformative power of education firsthand. We’ve seen shy, uncertain children blossom into confident, capable individuals, equipped with the knowledge and skills to pursue their dreams. We’ve seen communities come together, united by a shared commitment to the betterment of their children’s future.\n\nAs we reflect on our journey, we are filled with gratitude for the unwavering support of our volunteers, donors, partners, and the communities we serve. Together, we have achieved so much, yet we know that our work is far from over.\n\nOur story is still being written, with each chapter filled with hope, resilience, and determination. As we look towards the future, we remain steadfast in our mission to break down barriers, uplift communities, and create a world where every child has the opportunity to thrive.",
    },
  };

  const NumberCounter = ({ target, duration = 10 }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
      let observer;
      const currentRef = counterRef.current;

      const startCounting = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          const incrementTime = (duration / end);
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, incrementTime);
          observer.disconnect();
        }
      };

      observer = new IntersectionObserver(startCounting, {
        threshold: 0.01,
      });

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }, [target, duration]);

    return <span ref={counterRef}>{new Intl.NumberFormat().format(count)}</span>;
  };

  return (
    <div className="min-h-screen bg-[#FBF6ED] font-sans">
      
      <Navbar/> 
      <h1 className='text text-7xl font-bold p-2 px-10'>About Us</h1>
      {/* We Work Together Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative pb-4 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-yellow-500">
              {aboutData.weWorkTogether.heading}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {aboutData.weWorkTogether.text}
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-[#FFD700]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.impactStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
                  <NumberCounter target={stat.value} />
                </h3>
                <p className="text-lg font-medium text-gray-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG20240114122634-scaled.jpg"
                alt="Our Mission"
                // The image now has a specific height on medium screens and up to match the text
                className="w-full h-[250px] md:h-[400px] rounded-xl shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {aboutData.ourMission.heading}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {aboutData.ourMission.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-[#FBF6ED]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {aboutData.ourStory.heading}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {aboutData.ourStory.text}
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src="https://bastikipathshala.org/wp-content/uploads/2024/02/IMG-20240218-WA0084.jpg"
                alt="Our Story"
                // Applied same height change here for consistency
                className="w-full h-[250px] md:h-[400px] rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or simply spread the word, your support can help change a child's life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/register"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </a>
            <a href="https://bastikipathshala.org/donate" className="bg-white text-gray-800 font-normal py-3 px-8 rounded shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300" target="_blank" rel="noopener noreferrer">
                                Donate
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="border-t border-gray-800 m-8 p-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
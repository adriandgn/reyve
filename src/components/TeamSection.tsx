import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

// Team member data
const teamMembers = {
  founders: [
    {
      name: 'George Kara',
      role: 'PRODUCT & SUPPLY CHAIN',
      bio: '20+ years Fashion Brand Operations & Strategy. Global Sourcing & Product Design Expert. Sustainabiity Innovator ',
      image: '/profile-george.jpg',
      linkedin: 'https://www.linkedin.com/in/george-kara/'
    },
    {
      name: 'Pailiak Mzikian',
      role: 'PLATFORM & OPERATIONS',
      bio: '18+ years Textile & Plastic Recycling. Circular Fashion Entrepreneur, Innovator & Lecturer',
      image: '/profile-pailak.jpg',
      linkedin: 'https://www.linkedin.com/in/pailiak-mzikian/'
    },
    {
      name: 'AnaMaria Quijano-W.',
      role: 'BRAND, GROWTH & EXPERIENCE',
      bio: '20+ years Sustainability Strategy, Communications, Investment, Org. Development',
      image: '/profile-AnaMaria.jpg',
      linkedin: 'https://www.linkedin.com/in/anamariaquijanow'
    }
  ],
  heroes: [
    {
      name: 'Adrian Aguirre',
      role: 'PRODUCT LEAD',
      bio: '15+ years Product Lead & Product Designer.',
      image: '/profile8.jpeg',
      linkedin: 'https://www.linkedin.com/in/adriandgn/'
    },
    {
      name: 'Josefina Coll',
      role: 'REDESIGNER, PRODUCT & STRATEGY',
      bio: '15 years Fashion Upcycling as Atelier Owner & B2B Influencer.',
      image: '/profile4.png',
      linkedin: 'https://www.linkedin.com/in/josefinacoll/'
    },
    {
      name: 'Charlotte Duzong',
      role: 'FASHION REDESIGNER',
      bio: 'Founder and Designer, Creative Fashion Trainer.',
      image: '/profile-Charlotte.jpg',
      linkedin: 'https://www.linkedin.com/in/charlotteduzong/'
    }
  ]
};

const TeamMemberCard = ({ member, category }: { member: any, category: string }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full max-w-[240px] w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="pt-5 pb-3 flex justify-center">
        <motion.div 
          className="relative w-32 h-32 rounded-full bg-gray-200 shadow-lg border-2 border-white flex items-center justify-center overflow-hidden"
          animate={{
            scale: isHovered ? 1.07 : 1,
            transition: { duration: 0.5 }
          }}
        >
          {/* Foto real del miembro */}
          <img
            src={member.image}
            alt={`Photo of ${member.name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        
      </div>
      
      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-0.5 leading-tight" style={{letterSpacing: '-0.5px'}}>{member.name}</h3>
          <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide" style={{letterSpacing: '0.04em'}}>{member.role}</p>
          <div className="h-[1px] bg-gray-100 w-full my-2"></div>
          <div className="min-h-[50px] mt-1 mb-2">
            <p className="text-xs text-gray-700 leading-relaxed">{member.bio}</p>
          </div>
        </div>
        <div className="mt-auto pt-3 flex justify-end">
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-400 hover:text-brand-600 transition-colors duration-200"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Meet the Team</h2>
          <p className="text-lg text-gray-600">
            Passionate individuals driving Re:YVE's mission to build the infrastructure to turn fashion’s linear product model into a regenerative cycle -from design to after-sale. 
          </p>
        </div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-2" style={{
            maxWidth: '836px',
            margin: 'auto'
          }}>
            {teamMembers.founders.map((member, index) => (
              <TeamMemberCard key={`founder-${index}`} member={member} category="founders" />
            ))}
          </div>
        </div>

        {/* Heroes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Heroes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-2" style={{
            maxWidth: '836px',
            margin: 'auto'
          }}>
            {teamMembers.heroes.map((member, index) => (
              <TeamMemberCard key={`hero-${index}`} member={member} category="heroes" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;

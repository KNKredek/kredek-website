import { useState } from 'react';
import { 
  Clock, Users, GraduationCap, Rocket, ChevronDown, ChevronUp, 
  User
} from 'lucide-react';
import './aboutUs.scss';

interface StatCard {
  id: number;
  value: string;
  label: string;
  iconType: 'clock' | 'users' | 'cap' | 'rocket';
}

interface BoardMember {
  id: number;
  name: string;
  role: string;
  imageUrl?: string;
}

interface PastTerm {
  id: number;
  badgeNumber: string;
  title: string;
  members: BoardMember[];
}

const mockStats: StatCard[] = [
  { id: 1, value: '2007', label: 'AKTYWNI OD', iconType: 'clock' },
  { id: 2, value: '2000+', label: 'PRZESZKOLONYCH STUDENTÓW', iconType: 'users' },
  { id: 3, value: '50+', label: 'MENTORÓW', iconType: 'cap' },
  { id: 4, value: '100+', label: 'PROJEKTÓW', iconType: 'rocket' }
];

const currentBoard: BoardMember[] = [
  { id: 1, name: 'Aleksandra Maj', role: 'PREZES' },
  { id: 2, name: 'Piotr Nowicki', role: 'SEKRETARZ NACZELNY' },
  { id: 3, name: 'Marta Kowalska', role: 'WICEPREZES DS. KURSU' },
  { id: 4, name: 'Jan Wójcik', role: 'WICEPREZES DS. PROMOCJI' }
];

const pastTermsData: PastTerm[] = [
  {
    id: 1,
    badgeNumber: '22',
    title: 'Kadencja 2022/2023',
    members: [
      { id: 1, name: 'Krzysztof Bąk', role: 'PREZES' },
      { id: 2, name: 'Anna Wiśniewska', role: 'SEKRETARZ' },
      { id: 3, name: 'Marek Zając', role: 'WICEPREZES DS. IT' },
      { id: 4, name: 'Patrycja Lis', role: 'WICEPREZES DS. PR' }
    ]
  },
  {
    id: 2,
    badgeNumber: '21',
    title: 'Kadencja 2021/2022',
    members: [
      { id: 1, name: 'Jan Kowalski', role: 'PREZES' },
      { id: 2, name: 'Maria Nowak', role: 'SEKRETARZ' }
    ]
  },
  {
    id: 3,
    badgeNumber: '20',
    title: 'Kadencja 2020/2021',
    members: [
      { id: 1, name: 'Tomasz Zieliński', role: 'PREZES' },
      { id: 2, name: 'Karolina Woźniak', role: 'SEKRETARZ' }
    ]
  }
];

export default function AboutUs() {
  const [expandedTermId, setExpandedTermId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setExpandedTermId(expandedTermId === id ? null : id);
  };

  const renderStatIcon = (type: string) => {
    switch (type) {
      case 'clock': return <Clock className="statIcon" />;
      case 'users': return <Users className="statIcon" />;
      case 'cap': return <GraduationCap className="statIcon" />;
      case 'rocket': return <Rocket className="statIcon" />;
      default: return <Clock className="statIcon" />;
    }
  };

  return (
    <div className="aboutUsPage">

      <section className="aboutHero">
        <div className="heroContent">
          <h1>Budujemy przyszłość IT</h1>
          <p>Jesteśmy studenckim kołem naukowym, które od lat łączy pasjonatów programowania, designu i nowoczesnych technologii. Uczymy, inspirujemy i tworzymy projekty, które zmieniają rzeczywistość.</p>
        </div>

        <div className="statsGrid">
          {mockStats.map(stat => (
            <div key={stat.id} className="statCard">
              <div className={`iconWrapper ${stat.iconType}`}>
                {renderStatIcon(stat.iconType)}
              </div>
              <h2>{stat.value}</h2>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="currentManagement">
        <div className="sectionTitleBlock">
          <h2>Obecny Zarząd</h2>
          <div className="decorLine"></div>
        </div>

        <div className="managementGrid">
          {currentBoard.map(member => (
            <div key={member.id} className="memberCard">
              <div className="avatarPlaceholder">
                {/* Obrazek imitujący mikser/sprzęt audio z makiety */}
                <div className="knobGroup">
                  <span className="knob"></span>
                  <span className="knob"></span>
                </div>
              </div>
              <div className="memberInfo">
                <h3>{member.name}</h3>
                <span className="memberRole">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pastManagement">
        <div className="sectionTitleBlock">
          <h2>Poprzednie Zarządy</h2>
          <div className="decorLineLong"></div>
        </div>

        <div className="accordionContainer">
          {pastTermsData.map(term => {
            const isExpanded = expandedTermId === term.id;
            return (
              <div key={term.id} className={`accordionItem ${isExpanded ? 'active' : ''}`}>
                <div className="accordionHeader" onClick={() => toggleAccordion(term.id)}>
                  <div className="headerLeft">
                    <span className="termBadge">{term.badgeNumber}</span>
                    <h3>{term.title}</h3>
                  </div>
                  <div className="headerRight">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="accordionContent">
                    <div className="pastMembersGrid">
                      {term.members.map(member => (
                        <div key={member.id} className="pastMemberRow">
                          <div className="smallAvatar">
                            <User size={16} />
                          </div>
                          <div className="pastMemberMeta">
                            <h4>{member.name}</h4>
                            <span>{member.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
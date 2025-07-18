import React, { useState } from 'react';

const tabs = [
  { label: 'Live/Soon', value: 'live', svg: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 21H11M11 21H7M11 21V18C11 16.8954 10.1046 16 9 16C7.89543 16 7 16.8954 7 18V21M7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V13M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M18 21L21 18M21 18L18 15M21 18H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> },
  { label: 'Futures', value: 'futures', svg: <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>broadcast</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <circle cx="24" cy="24" r="5"></circle> <path d="M17.4,31.5a2.1,2.1,0,0,1-2.8,3,14.3,14.3,0,0,1,0-21,2.1,2.1,0,0,1,2.8,3,10,10,0,0,0,0,15Z"></path> <path d="M38,24a14.2,14.2,0,0,1-4.6,10.5,2.1,2.1,0,0,1-2.8-3,10,10,0,0,0,0-15,2.1,2.1,0,1,1,2.8-3A14.2,14.2,0,0,1,38,24Z"></path> <path d="M46,24a21.1,21.1,0,0,1-6.6,15.4,2,2,0,0,1-2.8-2.8,17.4,17.4,0,0,0,0-25.2,2,2,0,0,1,2.8-2.8A21.1,21.1,0,0,1,46,24Z"></path> <path d="M11.4,36.6a2,2,0,0,1-2.8,2.8,21.3,21.3,0,0,1,0-30.8,2,2,0,0,1,2.8,2.8,17.4,17.4,0,0,0,0,25.2Z"></path> </g> </g> </g></svg> },
];

const tabs2 =[
  {
    "label": "Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
  },
  {
    "label": "Indian Premier League",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Indian_Premier_League_Official_Logo.svg/1200px-Indian_Premier_League_Official_Logo.svg.png"
  },
  {
    "label": "NBA",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/National_Basketball_Association_logo.svg/1200px-National_Basketball_Association_logo.svg.png"
  },
  {
    "label": "La Liga",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/LaLiga_Santander_logo_%28stacked%29.svg/1200px-LaLiga_Santander_logo_%28stacked%29.svg.png"
  },
  {
    "label": "NFL",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png"
  },
  {
    "label": "UEFA Champions League",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg/640px-UEFA_Europa_League_logo_%282024_version%29.svg.png"
  },
  {
    "label": "Formula 1",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/1200px-F1.svg.png"
  },
  {
    "label": "MLB",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/640px-Major_League_Baseball_logo.svg.png"
  },
  {
    "label": "Bundesliga",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png"
  },
  {
    "label": "WWE",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/640px-WWE_Logo.svg.png"
  },
  {
    "label": "UFC",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UFC_Logo.svg/1200px-UFC_Logo.svg.png"
  },



]

const SportsSidebarTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('live');
  const [activeTab2, setActiveTab2] = useState('Team 1');

  return (
    <div className="bg-[#101010] lg:border-r  border-gray-700  p-4 h-fit">
      <div className="space-y-4 border-b border-gray-700 pb-5">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`w-full flex justify-between items-center ${
                activeTab === tab.value
                  ? 'bg-[#181818] text-white hover:bg-[#181818] px-4'
                  : 'text-gray-300 hover:text-white hover:bg-[#181818] px-4'
              }`}
            onClick={() => setActiveTab(tab.value)}
          >
            <div className='flex items-center'>
            <div className='w-4 h-4 mr-2 text-white'>
            {tab.svg}
            </div>
            {tab.label}
            </div>
          </button>
        ))}
      </div>
      <br className='border-b border-gray-700'/>
      <div className="space-y-4">
        {tabs2.map((tab) => (
          <div key={tab.label} className={`flex items-center gap-2 px-4 ${activeTab2 === tab.label ? 'bg-[#181818] text-white hover:bg-[#181818] px-5' : 'text-gray-300 hover:text-white hover:bg-[#181818] px-4'}`} onClick={() => setActiveTab2(tab.label)}>
            <img src={tab.logo} alt={tab.label} className="w-8 h-8 object-contain" />
            {tab.label}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SportsSidebarTabs; 
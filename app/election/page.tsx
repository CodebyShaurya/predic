'use client';

import { useState, useEffect } from 'react';
import { Vote, Users, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';

const electionData = {
  sidebar: [
    { 
      name: "Elections", 
      icon: (
        <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>ic_fluent_live_24_filled</title>
            <desc>Created with Sketch.</desc>
            <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="ic_fluent_live_24_filled" fill="#ffffff" fillRule="nonzero">
                <path d="M6.34277267,4.93867691 C6.73329697,5.3292012 6.73329697,5.96236618 6.34277267,6.35289047 C3.21757171,9.47809143 3.21757171,14.5450433 6.34277267,17.6702443 C6.73329697,18.0607686 6.73329697,18.6939336 6.34277267,19.0844579 C5.95224838,19.4749821 5.3190834,19.4749821 4.92855911,19.0844579 C1.02230957,15.1782083 1.02230957,8.84492646 4.92855911,4.93867691 C5.3190834,4.54815262 5.95224838,4.54815262 6.34277267,4.93867691 Z M19.0743401,4.93867691 C22.9805896,8.84492646 22.9805896,15.1782083 19.0743401,19.0844579 C18.6838158,19.4749821 18.0506508,19.4749821 17.6601265,19.0844579 C17.2696022,18.6939336 17.2696022,18.0607686 17.6601265,17.6702443 C20.7853275,14.5450433 20.7853275,9.47809143 17.6601265,6.35289047 C17.2696022,5.96236618 17.2696022,5.3292012 17.6601265,4.93867691 C18.0506508,4.54815262 18.6838158,4.54815262 19.0743401,4.93867691 Z M9.3094225,7.81205295 C9.69994679,8.20257725 9.69994679,8.83574222 9.3094225,9.22626652 C7.77845993,10.7572291 7.77845993,13.2394099 9.3094225,14.7703724 C9.69994679,15.1608967 9.69994679,15.7940617 9.3094225,16.184586 C8.91889821,16.5751103 8.28573323,16.5751103 7.89520894,16.184586 C5.58319778,13.8725748 5.58319778,10.1240641 7.89520894,7.81205295 C8.28573323,7.42152866 8.91889821,7.42152866 9.3094225,7.81205295 Z M16.267742,7.81205295 C18.5797531,10.1240641 18.5797531,13.8725748 16.267742,16.184586 C15.8772177,16.5751103 15.2440527,16.5751103 14.8535284,16.184586 C14.4630041,15.7940617 14.4630041,15.1608967 14.8535284,14.7703724 C16.384491,13.2394099 16.384491,10.7572291 14.8535284,9.22626652 C14.4630041,8.83574222 14.4630041,8.20257725 14.8535284,7.81205295 C15.2440527,7.42152866 15.8772177,7.42152866 16.267742,7.81205295 Z M12.0814755,10.5814755 C12.9099026,10.5814755 13.5814755,11.2530483 13.5814755,12.0814755 C13.5814755,12.9099026 12.9099026,13.5814755 12.0814755,13.5814755 C11.2530483,13.5814755 10.5814755,12.9099026 10.5814755,12.0814755 C10.5814755,11.2530483 11.2530483,10.5814755 12.0814755,10.5814755 Z" id="🎨-Color"></path>
              </g>
            </g>
          </g>
        </svg>
      ), 
      active: true 
    },
    { 
      name: "Macro", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>
      ), 
      active: false 
    },
    { name: "Sports", icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), active: false },
    { name: "Fed Rates", icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Trending_Up"> <path id="Vector" d="M20.0005 7L14.1543 12.9375C14.0493 13.0441 13.9962 13.0976 13.9492 13.1396C13.1899 13.8193 12.0416 13.8193 11.2822 13.1396C11.2352 13.0976 11.1817 13.0442 11.0767 12.9375C10.9716 12.8308 10.9191 12.7774 10.8721 12.7354C10.1127 12.0557 8.96397 12.0557 8.20461 12.7354C8.15771 12.7773 8.10532 12.8305 8.00078 12.9367L4 17M20.0005 7L20 13M20.0005 7H14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
    ), active: false }
  ],
  elections: [
    {
      id: 1,
      date: "15",
      month: "july",
      country: "Japan",
      flag: "House of counceloor",
      parties: [
        { name: "Democratic Party", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 52, color: "bg-blue-500" },
        { name: "Republican Party", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png", chance: 45, color: "bg-red-500" },
        { name: "Green Party", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 2, color: "bg-green-500" },
        { name: "Libertarian Party", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 1, color: "bg-yellow-500" }
      ]
    },
    {
      id: 2,
      date: "15",
      month: "july",
      country: "Japan",
      flag: "House of counceloor",
      parties: [
        { name: "Conservative Party", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 38, color: "bg-blue-600" },
        { name: "Labour Party", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png", chance: 42, color: "bg-red-600" },
        { name: "Liberal Democrats", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 12, color: "bg-yellow-500" },
        { name: "SNP", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png", chance: 5, color: "bg-yellow-600" },
        // { name: "Green Party", logo: "🟢", chance: 2, color: "bg-green-500" },
        // { name: "Reform UK", logo: "⚫", chance: 1, color: "bg-gray-600" }
      ]
    },
    {
      id: 3,
      date: "15",
      month: "july",
      country: "Japan",
      flag: "House of counceloor",
      parties: [
        { name: "LDP (Liberal Democratic…)", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png", chance: 28, color: "bg-gray-700" },
        { name: "SPD", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 25, color: "bg-red-600" },
        { name: "AfD", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Brighton_%26_Hove_Albion_logo.svg/1200px-Brighton_%26_Hove_Albion_logo.svg.png", chance: 18, color: "bg-blue-700" },
        { name: "FDP", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", chance: 12, color: "bg-yellow-500" },
        // { name: "Die Linke", logo: "🟣", chance: 8, color: "bg-purple-600" },
        // { name: "Greens", logo: "🟢", chance: 9, color: "bg-green-600" }
      ]
    }
  ]
};

export default function ElectionPage() {
  const [siteData, setSiteData] = useState<any>(null);
  // const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await fetch('/api/data');
          if (response.ok) {
            const data = await response.json();
            setSiteData(data);
            // setSelectedMatch(data.sports.selectedGame);
          }
        } catch (error) {
          console.error('Error loading data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadData();
    }, []);
  const [activeCategory, setActiveCategory] = useState("Presidential");

  if (loading) {
    return (
      <div className="min-h-screen bg-[#101010] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="min-h-screen bg-[#101010] flex items-center justify-center">
        <div className="text-white text-xl">Error loading data</div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-[#101010]">
      <Navbar data={siteData.navbar} />
            <TabNavigation tabs={siteData.tabs} moreDropdown={siteData.moreDropdown} />
            
      <div className=" pr-4 sm:pr-6 lg:pr-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#101010] border-r border-gray-700  p-4 h-full">
              <h3 className="text-white  font-semibold mb-4">Election Types</h3>
              <div className="space-y-2">
                {electionData.sidebar.map((item, index) => (
                  <Button
                    key={index}
                    variant={activeCategory === item.name ? "default" : "ghost"}
                    onClick={() => setActiveCategory(item.name)}
                    className={`w-full justify-start ${
                      activeCategory === item.name
                        ? 'bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    
                      <span className="mr-2 w-6 h-6 flex items-center justify-center">{item.icon}</span>
                    
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {electionData.elections.map((election) => (
                <div key={election.id} className="bg-[#1E1E1E] border border-gray-700 rounded-lg p-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      {/* <Calendar className="h-5 w-5 text-gray-400" /> */}
                      <div className="flex flex-col items-center space-x-2 min-w-0 flex-shrink-0">
                          {/* <Calendar className="h-4 w-4 text-gray-400" /> */}
                          <span className="text-white text-3xl font-semibold whitespace-nowrap">{election.date} </span>
                          <span className="text-gray-400 text-sm whitespace-nowrap">{election.month}</span>
                        </div>

                        <div className="flex flex-col  space-x-2 min-w-0 flex-shrink-0">
                          {/* <Calendar className="h-4 w-4 text-gray-400" /> */}
                          <span className="text-white ml-1 text-2xl whitespace-nowrap">{election.country} </span>
                          <span className="text-gray-400 text-sm whitespace-nowrap">{election.flag}</span>
                        </div>
                    </div>
                    <span className="text-4xl"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png" alt="flag" className="w-12 rounded-lg h-10" /></span>
                  </div>

                  {/* Parties */}
                  <div className="h-full overflow-y-auto space-y-3 hide-scrollbar">
                    {election.parties.map((party, index) => (
                      <div key={index} className="relative flex items-center  px-2 py-1 bg-transparent overflow-hidden">
                        {/* Blue bar background */}
                        <div
                          className="absolute left-0 top-0 h-full bg-[#2D9CDB] z-0 "
                          style={{ width: `${party.chance}%` }}
                        ></div>
                        {/* Content on top of the bar */}
                        <div className="flex items-center relative z-10 ml-3">
                          <span className="text-white text-lg min-w-[3rem] ">
                            {party.chance}%
                          </span>
                        </div>
                        <div className="flex items-center relative z-10">
                          <span className="text-2xl"><img src={party.logo} className="w-10 rounded-lg" /></span>
                          <span className="text-white ml-1 ">{party.name}</span>
                        </div>
                        
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
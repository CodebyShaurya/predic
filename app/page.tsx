'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TabNavigation from '@/components/TabNavigation';
import SearchFilter from '@/components/SearchFilter';
import PredictionCard from '@/components/PredictionCard';

export default function Home() {
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (in real app, this would be an API call)
    const loadData = async () => {
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const data = await response.json();
          setSiteData(data);
        } else {
          // Fallback data if API fails
          const fallbackData = {
            "navbar": {
              "logo": "Predictas",
              "searchPlaceholder": "Search predictions...",
              "howItWorks": "How it works",
              "auth": {
                "login": "Log in",
                "signup": "Sign up"
              }
            },
            "tabs": [
              "Trending",
              "News",
              "Politics",
              "Middle East",
              "Sports",
              "Crypto",
              "Tech",
              "Culture",
              "Word Mentions",
              "Economy",
              "Election"
            ],
            "moreDropdown": [
              "Entertainment",
              "Science",
              "Health",
              "Environment",
              "Business"
            ],
            "breakingNews": [
              "Trump Epstein",
              "Trump vs Elon",
              "Educational Trade war",
              "AI Regulation",
              "Climate Summit"
            ],
            "predictions": [
              {
                "id": 1,
                "type": "list",
                "image": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
                "title": "2024 Presidential Election Winner",
                "volume": "$20m",
                "options": [
                  {
                    "name": "Joe Biden",
                    "percentage": 45
                  },
                  {
                    "name": "Donald Trump",
                    "percentage": 38
                  },
                  {
                    "name": "Other Candidate",
                    "percentage": 17
                  }
                ]
              },
              {
                "id": 2,
                "type": "binary",
                "image": "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400",
                "title": "Will Bitcoin reach $100k by end of 2024?",
                "percentage": 67,
                "volume": "$15m",
                "yesPrice": "$0.67",
                "noPrice": "$0.33"
              },
              {
                "id": 3,
                "type": "list",
                "image": "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
                "title": "Next Tech Giant to Reach $5T Market Cap",
                "volume": "$8m",
                "options": [
                  {
                    "name": "Apple",
                    "percentage": 42
                  },
                  {
                    "name": "Microsoft",
                    "percentage": 35
                  },
                  {
                    "name": "NVIDIA",
                    "percentage": 23
                  }
                ]
              },
              {
                "id": 4,
                "type": "binary",
                "image": "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=400",
                "title": "Will there be a recession in 2024?",
                "percentage": 34,
                "volume": "$12m",
                "yesPrice": "$0.34",
                "noPrice": "$0.66"
              }
            ]
          };
          setSiteData(fallbackData);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#101010]  flex items-center justify-center">
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
      <TabNavigation tabs={siteData.tabs} moreDropdown={siteData.moreDropdown} currentTab="Trending" />
      <SearchFilter breakingNews={siteData.breakingNews} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {siteData.predictions.map((prediction: any) => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
      </main>
    </div>
  );
}
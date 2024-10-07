import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import DateAndTime from "../components/DateAndTime";
import BGImage from "../assets/images/BGImage.jpg";

export default function StartPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [greeting, setGreeting] = useState("Good Morning");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const apps = [
    {
      name: "Media",
      links: [
        { name: "YouTube", url: "https://youtube.com", icon: "logos:youtube-icon" },
        { name: "Netflix", url: "https://netflix.com", icon: "logos:netflix-icon" },
        {
          name: "Spotify",
          url: "https://open.spotify.com/",
          icon: "logos:spotify-icon",
        },
      ],
    },
    {
      name: "Work",
      links: [
        { name: "GitHub", url: "https://github.com", icon: "logos:github-icon" },
        {
          name: "localhost",
          url: "http://localhost:8000/",
          icon: "fluent:local-language-20-filled",
        },
      ],
    },
    {
      name: "Social",
      links: [
        {
          name: "Instagram",
          url: "https://instagram.com",
          icon: "skill-icons:instagram",
        },
        {
          name: "WhatsApp",
          url: "https://web.whatsapp.com/",
          icon: "logos:whatsapp-icon",
        },
        {
          name: "Telegram",
          url: "https://web.telegram.org/",
          icon: "logos:telegram",
        },
      ],
    },
    {
      name: "Coding Resources",
      links: [
        {
          name: "LeetCode",
          url: "https://leetcode.com/",
          icon: "cib:leetcode",
        },
        {
          name: "Stack Overflow",
          url: "https://stackoverflow.com/",
          icon: "logos:stackoverflow-icon",
        },
        {
          name: "GeeksforGeeks",
          url: "https://www.geeksforgeeks.org/",
          icon: "simple-icons:geeksforgeeks",
        },
      ],
    },
    {
      name: "Google",
      links: [
        { name: "Gmail", url: "http://gmail.com/", icon: "logos:google-gmail" },
        {
          name: "Google Drive",
          url: "https://drive.google.com/",
          icon: "logos:google-drive",
        },
        {
          name: "Google Photos",
          url: "https://photos.google.com/",
          icon: "logos:google-photos",
        },
        {
          name: "Google Maps",
          url: "https://www.google.com/maps",
          icon: "logos:google-maps",
        },
      ],
    },
    {
      name: "AI Tools",
      links: [
        {
          name: "ChatGPT",
          url: "https://chat.openai.com/",
          icon: "ri:openai-fill",
        },
        {
          name: "Gemini",
          url: "https://www.google.com/duet-ai/",
          icon: "logos:google-bard-icon",
        },
        {
          name: "Midjourney",
          url: "https://www.midjourney.com/",
          icon: "logos:midjourney",
        },
      ],
    },
    {
      name: "Others",
      links: [
        { name: "Discord", url: "https://discord.com/", icon: "logos:discord-icon" },
        { name: "Slack", url: "https://slack.com/", icon: "logos:slack-icon" },
        { name: "Zoom", url: "https://zoom.us/", icon: "logos:zoom-icon" },
      ],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, "_self"); // Opens in the same tab
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-8"
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundAttachment: "fixed", // Make the background fixed
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header with Title and Time */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {greeting}
          </h1>
          
            <DateAndTime />
        </header>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-12 max-w-xl mx-auto">
          <Icon
            icon="flat-color-icons:google"
            alt="Google"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-gray-400"
          />
          <input
            type="text"
            placeholder="Enter Search Content..."
            className="pl-14 pr-12 py-3 w-full bg-white/10 border-none text-white placeholder-gray-400 rounded-full text-lg shadow-md focus:outline-none focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
            aria-label="Search"
          >
            <Icon icon="ic:round-search" className="text-gray-400 text-2xl hover:text-white" />
          </button>
        </form>

        {/* Apps Grid */}
        {apps.map((app, appIndex) => (
          <div key={appIndex} className="bg-white/5 rounded-3xl p-8 mb-6">
            <h2 className="text-2xl font-semibold mb-4">{app.name}</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {app.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors hover:scale-105 transform"
                  aria-label={link.name} // Add aria-label for accessibility
                >
                  <div className="w-12 h-12 flex items-center justify-center mr-3">
                    <Icon icon={link.icon} className="text-3xl" />
                  </div>
                  <span className="text-lg font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <button
        // after some time hover effect
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Github"
          onClick={() => window.open("https://github.com/abhishekpj/abhishekpj", "_blank")}
        >
          <Icon icon="bi:github" className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

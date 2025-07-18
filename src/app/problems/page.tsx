"use client";

import React, { useEffect, useState } from "react";
import MonthlyHeatmap from '../components/MonthlyHeatmap';
import Image from 'next/image';

function parseCalendar(raw: unknown) {
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  return raw;
}

function generateDummyHeatmapData() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const data = [];
  for (let i = 0; i < 364; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - (363 - i));
    data.push({
      date: d.toISOString().slice(0, 10),
      value: Math.floor(Math.random() * 10),
    });
  }
  return data;
}

function generateEmptyHeatmapData() {
  // Generate 53 weeks x 7 days of zeros, matching the heatmap grid
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Find the most recent Sunday <= today
  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - today.getDay());
  // Go back 52 weeks (364 days) to get the first Sunday
  const start = new Date(lastSunday);
  start.setDate(lastSunday.getDate() - 7 * 52);
  const data = [];
  for (let i = 0; i < 7 * 53; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    data.push({
      date: d.toISOString().slice(0, 10),
      value: 0,
    });
  }
  return data;
}

const CACHE_KEY = 'leetcodeProfileCache';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms

function SafeProfile({ profile, contestInfo, badges }: { profile: any, contestInfo: any, badges: any[] }) {
  try {
    if (!profile) return null;
    const avatarSrc = typeof profile.avatar === 'string' && profile.avatar ? profile.avatar : '/default-avatar.png';
    return (
      <div className="mb-4">
        <div className="flex items-center gap-4 mb-2">
          <Image src={avatarSrc} alt="avatar" width={48} height={48} className="rounded-full border-2 border-accent" />
          <div>
            <div className="text-lg font-bold font-inter text-gray-50">{profile.name} <span className="text-sm text-gray-400">({profile.username})</span></div>
            <div className="text-sm text-gray-400 mt-1">
              <span className="mr-4">Problems Solved: <span className="text-accent font-semibold">{profile.totalSolved ?? 'N/A'}</span></span>
              <span className="mr-4">LeetCode Ranking: <span className="text-accent font-semibold">{profile.ranking ?? 'N/A'}</span></span>
              <span className="mr-4">Contest Rating: <span className="text-accent font-semibold">{contestInfo?.contestRating ? Math.round(contestInfo.contestRating) : 'N/A'}</span></span>
              <span>Contests Attended: <span className="text-accent font-semibold">{contestInfo?.contestAttend ?? 'N/A'}</span></span>
            </div>
          </div>
        </div>
        {/* Badges Section */}
        {badges.length > 0 && (
          <div className="mt-2">
            <div className="font-semibold text-gray-200 mb-1">Badges:</div>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, i) => {
                const badgeSrc = typeof badge.icon === 'string' && badge.icon ? badge.icon : '/default-badge.png';
                return (
                  <div key={i} className="flex items-center gap-1 bg-card-bg px-2 py-1 rounded text-xs text-gray-100">
                    <Image src={badgeSrc} alt={badge.name} width={20} height={20} className="w-5 h-5" />
                    <span>{badge.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  } catch (err) {
    return <div className="text-red-400 font-mono">Failed to render profile section.</div>;
  }
}

function SafeHeatmap({ data }: { data: { date: string; value: number }[] }) {
  try {
    if (!data || data.length === 0) return null;
    return <MonthlyHeatmap data={data} />;
  } catch (err) {
    return <div className="text-red-400 font-mono">Failed to render heatmap.</div>;
  }
}

export default function Problems() {
  const [profile, setProfile] = useState<any>(null);
  const [badges, setBadges] = useState<any[]>([]);
  const [contestInfo, setContestInfo] = useState<any>(null);
  const [calendar, setCalendar] = useState<{ [date: string]: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [sectionErrors, setSectionErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    async function fetchAllData() {
      let cache: any = null;
      try {
        const cacheRaw = localStorage.getItem(CACHE_KEY);
        if (cacheRaw) {
          cache = JSON.parse(cacheRaw);
          if (Date.now() - cache.timestamp < CACHE_TTL) {
            setProfile(cache.profile);
            setBadges(cache.badges);
            setContestInfo(cache.contestInfo);
            setCalendar(cache.calendar);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Ignore cache errors
      }
      // Fetch all APIs in parallel
      const newSectionErrors: {[key: string]: string} = {};
      let newProfile = null, newBadges = [], newContestInfo = null, newCalendar = null;
      try {
        newProfile = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/").then(r => r.json());
        setProfile(newProfile);
      } catch {
        newSectionErrors.profile = 'Failed to load profile';
      }
      try {
        const badgesRes = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/badges").then(r => r.json());
        newBadges = badgesRes.badges || [];
        setBadges(newBadges);
      } catch {
        newSectionErrors.badges = 'Failed to load badges';
      }
      try {
        newContestInfo = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/contest").then(r => r.json());
        setContestInfo(newContestInfo);
      } catch {
        newSectionErrors.contest = 'Failed to load contest info';
      }
      try {
        const calendarRes = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/calendar").then(r => r.json());
        let cal = (calendarRes as any).submissionCalendar || calendarRes;
        cal = parseCalendar(cal);
        newCalendar = cal;
        setCalendar(newCalendar);
      } catch {
        newSectionErrors.calendar = 'Failed to load calendar';
      }
      setSectionErrors(newSectionErrors);
      setLoading(false);
      if (newProfile || newBadges.length || newContestInfo || newCalendar) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            profile: newProfile,
            badges: newBadges,
            contestInfo: newContestInfo,
            calendar: newCalendar,
          }));
        } catch {
          //
        }
      }
    }
    fetchAllData();
  }, []);

  // Prepare data for MonthlyHeatmap
  let heatmapData: { date: string; value: number }[] = [];
  if (calendar) {
    heatmapData = Object.entries(calendar)
      .map(([date, count]) => {
        const d = new Date(Number(date) * 1000);
        if (d.getFullYear() < 2000) return null;
        return {
          date: d.toISOString().slice(0, 10),
          value: Number(count),
        };
      })
      .filter(Boolean) as { date: string; value: number }[];
    heatmapData.sort((a, b) => a.date.localeCompare(b.date));
  }
  if (!calendar || heatmapData.length === 0) {
    heatmapData = generateEmptyHeatmapData();
  }
  // Debug: log the last date in the heatmap
  if (heatmapData.length > 0) {
    console.log('Last date in heatmap:', heatmapData[heatmapData.length - 1].date);
  }

  return (
    <div className="bg-background min-h-screen w-full flex justify-center px-2 sm:px-4 py-16 sm:py-32">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-anton text-gray-50">Problem Solving</h1>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 font-inter">
          Track my progress on LeetCode, Codeforces, GitHub and more. Here you can see my coding stats!
        </p>
        <div className="rounded-xl bg-secondary/80 p-4 sm:p-8 shadow-sm flex flex-col gap-6">
          {/* Profile Section */}
          <SafeProfile profile={profile} contestInfo={contestInfo} badges={badges} />
          {/* Heatmap Section */}
          <SafeHeatmap data={heatmapData} />
        </div>
      </div>
    </div>
  );
} 
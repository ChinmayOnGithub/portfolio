"use client";

import React, { useEffect, useState } from "react";
import MonthlyHeatmap from '../components/MonthlyHeatmap';

interface Badge {
  name: string;
  icon: string;
}

interface Contest {
  title: string;
  rank: number;
  attended: boolean;
  startTime: number;
}

function formatTime(seconds: number) {
  if (!seconds) return "-";
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function formatNumber(n: number | undefined) {
  return n !== undefined && n !== null ? n.toLocaleString() : 'N/A';
}

function getDifficultyColor(difficulty: string) {
  if (difficulty === 'Easy') return 'text-green-400';
  if (difficulty === 'Medium') return 'text-yellow-400';
  if (difficulty === 'Hard') return 'text-red-400';
  return '';
}

function parseCalendar(raw: any) {
  // If it's a string, parse as JSON
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }
  return raw;
}

function getHeatmapColor(count: number) {
  // 5-level green scale: gray-800, green-100, green-300, green-500, green-700, green-900
  if (count === 0) return 'bg-gray-800';
  if (count < 2) return 'bg-green-100';
  if (count < 5) return 'bg-green-300';
  if (count < 10) return 'bg-green-500';
  if (count < 20) return 'bg-green-700';
  return 'bg-green-900';
}

function getDifficultyCircleColor(difficulty: string) {
  if (difficulty === 'Easy') return 'bg-green-400 text-green-900';
  if (difficulty === 'Medium') return 'bg-yellow-300 text-yellow-900';
  if (difficulty === 'Hard') return 'bg-red-400 text-red-900';
  return 'bg-gray-400 text-gray-900';
}

function getMonthName(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleString('default', { month: 'short', year: 'numeric' });
}

function getDayOfMonth(dateStr: string) {
  return new Date(dateStr).getDate();
}

function getMonthKey(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

const CACHE_KEY = 'leetcodeProfileCache';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in ms

export default function Problems() {
  const [profile, setProfile] = useState<any>(null);
  const [badges, setBadges] = useState<any[]>([]);
  const [contestInfo, setContestInfo] = useState<any>(null);
  const [solved, setSolved] = useState<any>(null);
  const [calendar, setCalendar] = useState<{ [date: string]: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
            setSolved(cache.solved);
            setCalendar(cache.calendar);
            setLoading(false);
            return;
          }
        }
      } catch (e) {
        // Ignore cache errors
      }
      // Fetch all APIs in parallel
      let newSectionErrors: {[key: string]: string} = {};
      let newProfile = null, newBadges = [], newContestInfo = null, newSolved = null, newCalendar = null;
      try {
        newProfile = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/").then(r => r.json());
        setProfile(newProfile);
      } catch (e) {
        newSectionErrors.profile = 'Failed to load profile';
      }
      try {
        const badgesRes = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/badges").then(r => r.json());
        newBadges = badgesRes.badges || [];
        setBadges(newBadges);
      } catch (e) {
        newSectionErrors.badges = 'Failed to load badges';
      }
      try {
        newContestInfo = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/contest").then(r => r.json());
        setContestInfo(newContestInfo);
      } catch (e) {
        newSectionErrors.contest = 'Failed to load contest info';
      }
      try {
        newSolved = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/solved").then(r => r.json());
        setSolved(newSolved);
      } catch (e) {
        newSectionErrors.solved = 'Failed to load solved stats';
      }
      try {
        const calendarRes = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/calendar").then(r => r.json());
        let cal = calendarRes.submissionCalendar || calendarRes;
        cal = parseCalendar(cal);
        newCalendar = cal;
        setCalendar(newCalendar);
      } catch (e) {
        newSectionErrors.calendar = 'Failed to load calendar';
      }
      setSectionErrors(newSectionErrors);
      setLoading(false);
      // Save to cache if at least one section succeeded
      if (newProfile || newBadges.length || newContestInfo || newSolved || newCalendar) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            profile: newProfile,
            badges: newBadges,
            contestInfo: newContestInfo,
            solved: newSolved,
            calendar: newCalendar,
          }));
        } catch (e) {}
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

  return (
    <div className="bg-background min-h-screen w-full flex justify-center px-2 sm:px-4 py-16 sm:py-32">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-anton text-gray-50">Problem Solving</h1>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 font-inter">
          Track my progress on LeetCode, Codeforces, GitHub and more. Here you can see my coding stats!
        </p>
        <div className="rounded-xl bg-secondary/80 p-4 sm:p-8 shadow-sm flex flex-col gap-6">
          {loading && <span className="text-gray-400 font-mono">Loading...</span>}
          {sectionErrors.profile && <span className="text-red-400 font-mono">{sectionErrors.profile}</span>}
          {profile && (
            <div className="mb-4">
              <div className="flex items-center gap-4 mb-2">
                <img src={profile.avatar} alt="avatar" className="w-12 h-12 rounded-full border-2 border-accent" />
                <div>
                  <div className="text-lg font-bold font-inter text-gray-50">{profile.name} <span className="text-sm text-gray-400">({profile.username})</span></div>
                  <div className="text-sm text-gray-400">LeetCode Contest Rating: <span className="text-accent font-semibold">{contestInfo?.contestRating ? Math.round(contestInfo.contestRating) : 'N/A'}</span></div>
                  <div className="text-sm text-gray-400">LeetCode Ranking: <span className="text-accent font-semibold">{profile.ranking ?? 'N/A'}</span></div>
                  <div className="text-sm text-gray-400">Contests Attended: <span className="text-accent font-semibold">{contestInfo?.contestAttend ?? 'N/A'}</span></div>
                </div>
              </div>
              {sectionErrors.badges && <span className="text-red-400 font-mono">{sectionErrors.badges}</span>}
              {badges.length > 0 && (
                <div className="mt-2">
                  <div className="font-semibold text-gray-200 mb-1">Badges:</div>
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge, i) => (
                      <div key={i} className="flex items-center gap-1 bg-card-bg px-2 py-1 rounded text-xs text-gray-100">
                        {badge.icon && <img src={badge.icon} alt={badge.name} className="w-5 h-5" />}
                        <span>{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          {sectionErrors.calendar && <span className="text-red-400 font-mono">{sectionErrors.calendar}</span>}
          {calendar && heatmapData.length > 0 && (
            <div className="w-full flex flex-col items-center">
              <div className="font-semibold text-gray-200 mb-2">LeetCode Submission Heatmap</div>
              <MonthlyHeatmap data={heatmapData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
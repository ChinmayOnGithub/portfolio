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

function SafeProfile({ profile, contestInfo, badges, solvedStats }: { profile: any, contestInfo: any, badges: any[], solvedStats?: any }) {
  try {
    if (!profile) return null;
    const avatarSrc = typeof profile.avatar === 'string' && profile.avatar ? profile.avatar : '/default-avatar.png';
    // Try to get easy/medium/hard solved counts from profile if present
    let total = null, easy = null, medium = null, hard = null;
    if (solvedStats && typeof solvedStats === 'object') {
      total = solvedStats.solvedProblem ?? null;
      easy = solvedStats.easySolved ?? null;
      medium = solvedStats.mediumSolved ?? null;
      hard = solvedStats.hardSolved ?? null;
    }
    return (
      <div className="mb-4">
        <div className="flex items-center gap-4 mb-2">
          <Image src={avatarSrc} alt="avatar" width={48} height={48} className="rounded-full border-2 border-accent" />
          <div>
            <div className="text-lg font-bold font-inter text-gray-50">{profile.name} <span className="text-sm text-gray-400">({profile.username})</span></div>
            {/* Badges Section: directly below name, no label */}
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2 mb-1">
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
            )}
            <div className="flex flex-col gap-1 text-sm text-gray-400 mt-2">
              <span>
                Problems Solved: <span className="text-accent font-semibold">{total !== null ? total : 'N/A'}</span>
                {(easy !== null && medium !== null && hard !== null) && (
                  <span className="ml-2 text-xs font-normal text-gray-300">
                    (<span className="inline-flex items-center gap-1">
                      <span style={{ color: '#22c55e', fontSize: '1.1em', verticalAlign: 'middle' }}>&#9679;</span> {easy}
                      <span style={{ color: '#fde047', fontSize: '1.1em', verticalAlign: 'middle', marginLeft: 8 }}>&#9679;</span> {medium}
                      <span style={{ color: '#f87171', fontSize: '1.1em', verticalAlign: 'middle', marginLeft: 8 }}>&#9679;</span> {hard}
                    </span>)
                  </span>
                )}
              </span>
              <span>LeetCode Ranking: <span className="text-accent font-semibold">{profile.ranking ?? 'N/A'}</span></span>
              <span>Contest Rating: <span className="text-accent font-semibold">{contestInfo?.contestRating ? Math.round(contestInfo.contestRating) : 'N/A'}</span></span>
              <span>Contests Attended: <span className="text-accent font-semibold">{contestInfo?.contestAttend ?? 'N/A'}</span></span>
            </div>
          </div>
        </div>
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
  const [solvedStats, setSolvedStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sectionErrors, setSectionErrors] = useState<{ [key: string]: string }>({});
  const [rateLimited, setRateLimited] = useState(false);

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
            setSolvedStats(cache.solvedStats ?? null);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Ignore cache errors
      }
      // Fetch all APIs in parallel
      const newSectionErrors: { [key: string]: string } = {};
      let newProfile = null, newBadges = [], newContestInfo = null, newCalendar = null, newSolvedStats = null;
      let rateLimitHit = false;
      // Helper to check for rate limit
      function isRateLimited(res: any) {
        if (typeof res === 'string' && res.includes('Too many request')) return true;
        if (res && typeof res === 'object' && res.error && String(res.error).includes('Too many request')) return true;
        return false;
      }
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/");
        const data = await res.text();
        if (isRateLimited(data)) { rateLimitHit = true; throw new Error('Rate limited'); }
        newProfile = JSON.parse(data);
        setProfile(newProfile);
      } catch {
        newSectionErrors.profile = rateLimitHit ? 'Rate limited. Try again later.' : 'Failed to load profile.';
      }
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/badges");
        const data = await res.text();
        if (isRateLimited(data)) { rateLimitHit = true; throw new Error('Rate limited'); }
        const badgesRes = JSON.parse(data);
        newBadges = badgesRes.badges || [];
        setBadges(newBadges);
      } catch {
        newSectionErrors.badges = rateLimitHit ? 'Rate limited. Try again later.' : 'Failed to load badges.';
      }
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/contest");
        const data = await res.text();
        if (isRateLimited(data)) { rateLimitHit = true; throw new Error('Rate limited'); }
        newContestInfo = JSON.parse(data);
        setContestInfo(newContestInfo);
      } catch {
        newSectionErrors.contest = rateLimitHit ? 'Rate limited. Try again later.' : 'Failed to load contest info.';
      }
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/calendar");
        const data = await res.text();
        if (isRateLimited(data)) { rateLimitHit = true; throw new Error('Rate limited'); }
        let cal = (JSON.parse(data) as any).submissionCalendar || JSON.parse(data);
        cal = parseCalendar(cal);
        newCalendar = cal;
        setCalendar(newCalendar);
      } catch {
        newSectionErrors.calendar = rateLimitHit ? 'Rate limited. Try again later.' : 'Failed to load calendar.';
      }
      try {
        const res = await fetch("https://alfa-leetcode-api.onrender.com/chinmaydpatil09/solved");
        const data = await res.text();
        if (isRateLimited(data)) { rateLimitHit = true; throw new Error('Rate limited'); }
        newSolvedStats = JSON.parse(data);
        setSolvedStats(newSolvedStats);
      } catch {
        newSectionErrors.solved = rateLimitHit ? 'Rate limited. Try again later.' : 'Failed to load solved count.';
      }
      setSectionErrors(newSectionErrors);
      setRateLimited(rateLimitHit);
      setLoading(false);
      if (!rateLimitHit && (newProfile || newBadges.length || newContestInfo || newCalendar || newSolvedStats)) {
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            profile: newProfile,
            badges: newBadges,
            contestInfo: newContestInfo,
            calendar: newCalendar,
            solvedStats: newSolvedStats,
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

  return (
    <div className="bg-background min-h-screen w-full flex justify-center px-2 sm:px-4 py-16 sm:py-32">
      <div className="max-w-6xl w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-anton text-gray-50">Problem Solving</h1>
        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 font-inter">
          Track my progress on LeetCode, Codeforces, GitHub and more. Here you can see my coding stats!
        </p>
        <div className="rounded-xl bg-secondary/80 p-4 sm:p-8 shadow-sm flex flex-col gap-6">
          {/* Error/Loading Section */}
          {loading && <div className="text-center text-gray-400 py-8">Loading LeetCode stats...</div>}
          {rateLimited && <div className="text-center text-red-400 font-semibold py-8">LeetCode API rate limit exceeded. Please try again in 1 hour.</div>}
          {!loading && !rateLimited && Object.values(sectionErrors).some(Boolean) && (
            <div className="text-center text-yellow-400 font-semibold py-4">
              {Object.entries(sectionErrors).map(([key, msg]) => msg && <div key={key}>{msg}</div>)}
            </div>
          )}
          {/* Profile Section */}
          {!loading && !rateLimited && !sectionErrors.profile && profile && (
            <SafeProfile profile={profile} contestInfo={contestInfo} badges={badges} solvedStats={solvedStats} />
          )}
          {/* Heatmap Section */}
          {!loading && !rateLimited && !sectionErrors.calendar && (
            <SafeHeatmap data={heatmapData} />
          )}
        </div>
      </div>
    </div>
  );
} 
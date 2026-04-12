/**
 * Dynamic Urgency Utility
 * 
 * Provides automated month names and enrollment numbers that evolve 
 * throughout the month to maintain high-authority urgency.
 */

const now = new Date();
const dayOfMonth = now.getDate();
const monthName = now.toLocaleString('en-US', { month: 'long' }).toUpperCase();

// logic: Spots decrease as the month progresses (Urgency)
// Range: 48 (Day 1) to ~4 (Day 30)
const spotsRemaining = Math.max(4, 48 - Math.floor(dayOfMonth * 1.4) + (dayOfMonth % 3));

// logic: Students increase as the month progresses (Social Proof)
// Range: 812 (Day 1) to ~1180 (Day 30)
const startedThisMonth = 812 + (dayOfMonth * 12) + (dayOfMonth % 5);

export const dynamicStats = {
  currentMonth: monthName,
  spotsRemaining: spotsRemaining,
  startedThisMonth: startedThisMonth,
  fullProgrammeTotal: 980, // Static for now as it's the course count
  categories: 47, // Static for now as it's the niche count
};

export default dynamicStats;

/*
freeCodeCamp - Daily Coding Challenges (02/19/2026) 

**2026 Winter Games Day 14: Ski Mountaineering**

Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

- The snow depth values are "Shallow", "Moderate", or "Deep".
- Slope values are "Gentle", "Steep", or "Very Steep".

Return "Safe" or "Risky" based on this table:

+--------------+-----------+------------+----------+
|              | "Shallow" | "Moderate" | "Deep"   |
+--------------+-----------+------------+----------+
| "Gentle"     | "Safe"    | "Safe"     | "Safe"   |
| "Steep"      | "Safe"    | "Risky"    | "Risky"  |
| "Very Steep" | "Safe"    | "Risky"    | "Risky"  |
+--------------+-----------+------------+----------+

*/

function avalancheRisk(snowDepth, slope) {
  if (slope === "Gentle" || snowDepth === "Shallow") return "Safe";
  return "Risky";
}

avalancheRisk("Shallow", "Gentle"); // should return "Safe".
avalancheRisk("Shallow", "Steep"); // should return "Safe".
avalancheRisk("Shallow", "Very Steep"); // should return "Safe".
avalancheRisk("Moderate", "Gentle"); // should return "Safe".
avalancheRisk("Moderate", "Steep"); // should return "Risky".
avalancheRisk("Moderate", "Very Steep"); // should return "Risky".
avalancheRisk("Deep", "Gentle"); // should return "Safe".
avalancheRisk("Deep", "Steep"); // should return "Risky".
avalancheRisk("Deep", "Very Steep"); // should return "Risky".

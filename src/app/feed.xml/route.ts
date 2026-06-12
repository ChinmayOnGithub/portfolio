import { NextResponse } from 'next/server';
import { papers } from '../constants';

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

export async function GET() {
  const siteUrl = 'https://chinmaypatil.com';

  const itemsXml = papers
    .map((paper) => {
      const paperUrl = `${siteUrl}/papers/${paper.id}`;
      let pubDate = '';
      try {
        pubDate = new Date(paper.date).toUTCString();
      } catch (e) {
        pubDate = paper.date;
      }

      return `    <item>
      <title>${escapeXml(paper.title)}</title>
      <link>${paperUrl}</link>
      <guid isPermaLink="true">${paperUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(paper.category)}</category>
      <description>${escapeXml(paper.summary)}</description>
    </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Chinmay Patil | Backend &amp; DevOps Engineer</title>
    <link>${siteUrl}</link>
    <description>Portfolio and technical papers of Chinmay Patil. Explore systems engineering, DevOps pipeline automations, cloud infrastructure, and technical case studies.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}

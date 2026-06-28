"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products } from './data';

export function Products() {
  return (
    <Card className="vintage-card">
      <div className="vintage-card-inner-border" />
      <div className="vintage-corner-flourish vintage-flourish-tl" />
      <div className="vintage-corner-flourish vintage-flourish-tr" />
      <div className="vintage-corner-flourish vintage-flourish-bl" />
      <div className="vintage-corner-flourish vintage-flourish-br" />

      <CardHeader className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl lg:text-3xl font-bold font-cormorant text-[var(--text-color)]">
              Products
            </CardTitle>
            <p className="text-sm lg:text-base font-sans italic text-[var(--meta-color)] mt-1">
              Software products I have built and actively maintain.
            </p>
          </div>
          <span className="hidden sm:inline font-mono text-[10px] text-[var(--meta-color)]/35 tracking-widest uppercase mt-1">
            [ SEC: PRODUCTS_LEDGER ]
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="group border-b border-[var(--border-color)] last:border-0 pb-6 last:pb-0 pt-4 first:pt-0 -mx-4 px-4 hover:bg-[var(--badge-bg)]/20 rounded-sm transition-all duration-300 ease-in-out font-times"
          >
            {/* Header info */}
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h3 className="font-bold font-cormorant text-2xl text-[var(--text-color)]">
                {product.title}
              </h3>
              <Badge className="vintage-badge text-xs px-2 py-0.5 font-sans tracking-wide">
                {product.badge}
              </Badge>
            </div>

            {/* Metrics table in ledger style */}
            {product.metrics && product.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 my-4 border-y border-[var(--border-color)] border-dashed font-mono text-xs">
                {product.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center sm:text-left">
                    <span className="block text-[var(--meta-color)] uppercase tracking-wider text-[9px] lg:text-[10px] mb-1">
                      {metric.label}
                    </span>
                    <span className="block text-[var(--text-color)] font-bold text-xs lg:text-sm">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <p className="text-base lg:text-[17px] mb-4 leading-relaxed text-[var(--text-color)]/95">
              {product.description}
            </p>

            {/* Highlights / Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.highlights.map((highlight, highlightIndex) => (
                <Badge
                  key={highlightIndex}
                  variant="secondary"
                  className="text-xs px-2.5 py-0.5 vintage-badge font-sans"
                >
                  {highlight}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={product.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="vintage-btn vintage-btn-primary h-8 px-4 inline-flex items-center justify-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider"
              >
                {product.cta.primary.label}
              </a>
              {product.cta.secondary && (
                <a
                  href={product.cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vintage-btn h-8 px-4 inline-flex items-center justify-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider"
                >
                  {product.cta.secondary.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

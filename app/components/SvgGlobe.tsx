"use client";

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import type { Topology, GeometryCollection } from 'topojson-specification';

interface City {
  name: string;
  coordinates: [number, number];
}

interface CountryProperties {
  name: string;
}

interface WorldData extends Topology {
  objects: {
    countries: GeometryCollection<CountryProperties>;
  };
}

export default function SvgGlobe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Set to 90% of viewport height for perfect single-screen fit
    const size = Math.min(window.innerHeight * 0.9, window.innerWidth * 0.9);
    const width = size;
    const height = size;

    const projection = d3.geoOrthographic()
      .scale(size * 0.5) // Perfectly balanced scale
      .center([0, 0])
      .rotate([0, -30, 0])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`);
    const globe = svg.append('g');

    // Sleek tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "fixed bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md text-xs font-medium pointer-events-none opacity-0 z-50 transition-opacity duration-150");

    // Minimal graticule
    const graticule = d3.geoGraticule();
    globe.append('path')
      .datum(graticule())
      .attr('class', 'graticule')
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255,255,255,0.15)')
      .attr('stroke-width', '0.3');

    d3.json<WorldData>('https://unpkg.com/world-atlas@1.1.4/world/110m.json').then((world) => {
      if (!world) return;

      const countries = topojson.feature(world, world.objects.countries);

      const pathFn = (d: GeoJSON.Feature<GeoJSON.Geometry, CountryProperties>) => path(d) || '';

      // Elegant country styling
      globe.selectAll(".continent")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "continent")
        .attr("d", pathFn)
        .attr("fill", "#3b82f6") // Perfect blue
        .attr("stroke", "#1e40af") // Deep border
        .attr("stroke-width", "0.4")
        .on("mouseover", function (event: MouseEvent, d: { properties: CountryProperties }) {
          tooltip.transition().duration(100).style("opacity", "1");
          tooltip.html(d.properties.name || "Unknown")
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 25}px`);
        })
        .on("mouseout", () => {
          tooltip.transition().duration(150).style("opacity", "0");
        });

      const cities: City[] = [
        { name: "Washington, D.C.", coordinates: [-77.0369, 38.9072] },
        { name: "London", coordinates: [-0.1278, 51.5074] },
        // ... other cities ...
      ];

      const pointsGroup = globe.append('g').attr('class', 'points');
      const points = cities.map((city, i) => ({
        ...city,
        color: d3.interpolateRainbow(i / cities.length)
      }));

      // Beautiful city markers
      const circles = pointsGroup.selectAll('circle')
        .data(points)
        .enter()
        .append('circle')
        .attr('r', '4') // Perfectly visible
        .attr('fill', d => d.color)
        .attr('stroke', 'white')
        .attr('stroke-width', '1.2')
        .on("mouseover", function (event: MouseEvent, d: City) {
          tooltip.transition().duration(100).style("opacity", "1");
          tooltip.html(d.name)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 25}px`);
        })
        .on("mouseout", () => {
          tooltip.transition().duration(150).style("opacity", "0");
        });

      const rotation: [number, number, number] = [0, -30, 0];

      // Buttery smooth rotation
      const timer = d3.timer((elapsed) => {
        rotation[0] = elapsed / 1000 * 7; // Perfect speed
        projection.rotate(rotation);

        globe.selectAll<SVGPathElement, GeoJSON.Feature<GeoJSON.Geometry, CountryProperties>>(".continent")
          .attr("d", pathFn);
        
        globe.selectAll<SVGPathElement, GeoJSON.MultiLineString>(".graticule")
          .attr("d", path);

        circles
          .attr("cx", d => projection(d.coordinates)?.[0] || 0)
          .attr("cy", d => projection(d.coordinates)?.[1] || 0);
      });

      // Responsive handling
      const handleResize = () => {
        const newSize = Math.min(window.innerHeight * 0.9, window.innerWidth * 0.9);
        const newWidth = newSize;
        const newHeight = newSize;
        
        projection
          .scale(newSize * 0.5)
          .translate([newWidth / 2, newHeight / 2]);
        
        svg
          .attr('width', newWidth)
          .attr('height', newHeight)
          .attr('viewBox', `0 0 ${newWidth} ${newHeight}`);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        timer.stop();
        window.removeEventListener('resize', handleResize);
        svg.selectAll('*').remove();
        tooltip.remove();
      };
    });

    return () => {
      svg.selectAll('*').remove();
      d3.select(".globe-tooltip").remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center h-[90vh] w-full">
      <svg
        ref={svgRef}
        className="w-auto h-full"
        aria-label="Perfectly sized interactive world globe"
      />
    </div>
  );
}
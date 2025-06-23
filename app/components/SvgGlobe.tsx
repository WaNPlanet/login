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

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 400;
    const height = 400;

    const projection = d3.geoOrthographic()
      .scale(150)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
    const globe = svg.append('g');

    // Tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "globe-tooltip")
      .style("position", "absolute")
      .style("background", "#fff")
      .style("padding", "4px 8px")
      .style("border-radius", "4px")
      .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
      .style("pointer-events", "none")
      .style("opacity", "0")
      .style("z-index", "10");

    // Graticule
    const graticule = d3.geoGraticule();
    globe.append('path')
      .datum(graticule)
      .attr('class', 'graticule')
      .attr('d', path)
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-opacity', '0.2');

    d3.json<WorldData>('https://unpkg.com/world-atlas@1.1.4/world/110m.json').then((world) => {
      if (!world) return;

      const countries = topojson.feature(world, world.objects.countries);

      globe.selectAll(".continent")
        .data(countries.features)
        .enter()
        .append("path")
        .attr("class", "continent")
        .attr("d", path)
        .attr("fill", "#1e88e5")
        .attr("stroke", "#0d47a1")
        .attr("stroke-width", "0.5")
        .on("mouseover", function (event: MouseEvent, d: { properties: CountryProperties }) {
          tooltip.transition().duration(200).style("opacity", "0.9");
          tooltip.html(d.properties.name || "Unknown")
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`);
        })
        .on("mouseout", () => {
          tooltip.transition().duration(300).style("opacity", "0");
        });

      const cities: City[] = [
        { name: "Washington, D.C.", coordinates: [-77.0369, 38.9072] },
        { name: "London", coordinates: [-0.1278, 51.5074] },
        { name: "Tokyo", coordinates: [139.6917, 35.6895] },
        { name: "Paris", coordinates: [2.3522, 48.8566] },
        { name: "Berlin", coordinates: [13.4050, 52.5200] },
        { name: "Ottawa", coordinates: [-75.6972, 45.4215] },
        { name: "Beijing", coordinates: [116.4074, 39.9042] },
        { name: "Canberra", coordinates: [149.1300, -35.2809] },
        { name: "Moscow", coordinates: [37.6173, 55.7558] },
        { name: "New Delhi", coordinates: [77.2090, 28.6139] }
      ];

      const pointsGroup = globe.append('g').attr('class', 'points');
      const points = cities.map((city, i) => ({
        ...city,
        color: d3.interpolateRainbow(i / cities.length)
      }));

      const circles = pointsGroup.selectAll('circle')
        .data(points)
        .enter()
        .append('circle')
        .attr('r', '3')
        .attr('fill', d => d.color)
        .attr('stroke', 'white')
        .attr('stroke-width', '1');

      const rotation = [0, -30];

      const timer = d3.timer(() => {
        rotation[0] += 0.1;
        projection.rotate(rotation);

        globe.selectAll(".continent").attr("d", path);
        globe.selectAll(".graticule").attr("d", path);

        circles
          .attr("cx", d => projection(d.coordinates)?.[0] || 0)
          .attr("cy", d => projection(d.coordinates)?.[1] || 0);
      });

      return () => {
        timer.stop();
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
    <div className="flex justify-center items-center my-12">
      <svg
        ref={svgRef}
        className="w-auto h-auto"
        aria-label="Interactive world globe visualization"
      />
    </div>
  );
}
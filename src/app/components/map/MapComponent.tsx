/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import { MapPin, Navigation } from "lucide-react";

// Define types for Leaflet
declare global {
  interface Window {
    L: any;
  }
}

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        document.head.appendChild(script);

        script.onload = () => {
          initializeMap();
        };
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // San Francisco coordinates
      const lat = 37.7749;
      const lng = -122.4194;

      // Initialize map
      const map = window.L.map(mapRef.current).setView([lat, lng], 13);

      // Add tile layer
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom marker icon
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-size: 16px;
              font-weight: bold;
            ">📍</div>
          </div>
        `,
        className: "custom-marker",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      // Add marker
      const marker = window.L.marker([lat, lng], { icon: customIcon }).addTo(
        map
      );

      // Add popup
      marker.bindPopup(`
        <div style="text-align: center; padding: 10px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
            Tahmina Afroz
          </h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
            Frontend Developer
          </p>
          <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 12px;">
            📍 Queens,NewYork <br>
            🌍 Available for remote work
          </p>
          <div style="display: flex; gap: 8px; justify-content: center;">
            <a href="mailto:tahmina.afroz8801@gmail.com" 
               style="background: #ef4444; color: white; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 12px;">
              📧 Email
            </a>
            <a href="tel:+15551234567" 
               style="background: #10b981; color: white; padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 12px;">
              📞 Call
            </a>
          </div>
        </div>
      `);

      // Add some style to the map
      map.on("load", () => {
        marker.openPopup();
      });

      // Add circle to show general area
      window.L.circle([lat, lng], {
        color: "#3b82f6",
        fillColor: "#3b82f6",
        fillOpacity: 0.1,
        radius: 2000,
      }).addTo(map);

      mapInstanceRef.current = map;

      // Open popup after a short delay
      setTimeout(() => {
        marker.openPopup();
      }, 1000);
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-120">
      <div ref={mapRef} className="w-full h-full rounded-lg" />

      {/* Map Controls Overlay */}
      <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-[1000]">
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-medium">Queens,NewYork</span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
          <Navigation className="h-3 w-3" />
          <span>Available for remote work</span>
        </div>
      </div>

      {/* Loading fallback */}
      <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-2 animate-bounce" />
          {/* <p className="text-sm text-muted-foreground">
            Loading interactive map...
          </p> */}
        </div>
      </div>
    </div>
  );
}

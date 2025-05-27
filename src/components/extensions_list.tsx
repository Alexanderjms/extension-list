"use client";

import React, { useState } from "react";
import ExtensionCard from "@/components/extension";

export const cardsData = [
  {
    id: "1",
    title: "DevLens",
    description:
      "Quickly inspect page layouts and visualize elements boundaries.",
    imageUrl: "/img/logo-devlens.svg",
    status: "inactive",
  },
  {
    id: "2",
    title: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element",
    imageUrl: "/img/logo-style-spy.svg",
    status: "inactive",
  },
  {
    id: "3",
    title: "SpeedBost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    imageUrl: "/img/logo-speed-boost.svg",
    status: "inactive",
  },
  {
    id: "4",
    title: "JsonWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    imageUrl: "/img/logo-json-wizard.svg",
    status: "inactive",
  },
  {
    id: "5",
    title: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    imageUrl: "/img/logo-tab-master-pro.svg",
    status: "inactive",
  },
  {
    id: "6",
    title: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    imageUrl: "/img/logo-viewport-buddy.svg",
    status: "inactive",
  },
  {
    id: "7",
    title: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    imageUrl: "/img/logo-markup-notes.svg",
    status: "inactive",
  },
  {
    id: "8",
    title: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    imageUrl: "/img/logo-grid-guides.svg",
    status: "inactive",
  },
  {
    id: "9",
    title: "Palette Picker",
    description: "Instantly extractS color palettes from any webpage.",
    imageUrl: "/img/logo-palette-picker.svg",
    status: "inactive",
  },
  {
    id: "10",
    title: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    imageUrl: "/img/logo-link-checker.svg",
    status: "inactive",
  },
  {
    id: "11",
    title: "Dom Snapshot",
    description: "Capture and export DOM structures quickly.",
    imageUrl: "/img/logo-dom-snapshot.svg",
    status: "inactive",
  },
  {
    id: "12",
    title: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    imageUrl: "/img/logo-console-plus.svg",
    status: "inactive",
  },
];

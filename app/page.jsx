"use client";

import { useEffect, useState } from "react";
import { getTopicsOffline } from "@/libs/IndexedDB";
import TopicsList from "../components/TopicsList";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function Home() {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    try {
      const isOnline = navigator.onLine;

      if (isOnline) {
        const { topics: onlineTopics } = await getTopics();
        setTopics(onlineTopics);
      } else {
        // Fetch topics from IndexedDB when offline
        const offlineTopics = await getTopicsOffline();
        setTopics(offlineTopics);
      }
    } catch (error) {
      console.error("Error fetching Topics:", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return <TopicsList topics={topics} />;
}
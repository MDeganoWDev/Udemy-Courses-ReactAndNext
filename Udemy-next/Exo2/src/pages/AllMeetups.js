import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList.js";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://dummy-exo2-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetupData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupData} />
    </section>
  );
};

export default AllMeetupsPage;

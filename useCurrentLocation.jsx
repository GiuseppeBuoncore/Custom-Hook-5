import { useState, useEffect } from "react";

function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getCurrentPosition() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    }

    if (navigator.geolocation) {
      getCurrentPosition();
    } else {
      setError(new Error("Geolocation is not supported"));
      setLoading(false);
    }
  }, []);

  function refreshLocation() {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }

  return { location, error, loading, refreshLocation };
}

export default useCurrentLocation;

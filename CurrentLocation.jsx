import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  const {location, error, loading, refreshLocation}= useCurrentLocation()


  return (
    <div>
       <div>
      {loading && <p>Caricamento...</p>}
      {error && <p>Si è verificato un errore: {error.message}</p>}
      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
      <button onClick={refreshLocation}>Aggiorna posizione</button>
    </div>
    </div>
  );
}

export default CurrentLocation;